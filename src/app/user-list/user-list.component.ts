import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { AddDialogComponent, EditDialogComponent, DeleteDialogComponent} from '../_dialogs';
import { UserService } from '../_services';
import { Global } from '../_shared';
import { IUser } from '../_models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loadingState: boolean;
  displayedColumns = ['userName', 'firstName', 'lastName', 'isReadOnly', 'canComment', 'isContributer', 'isAdmin', 'actions'];
  userService: UserService | null;
  dataSource: UserDataSource | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public _userService: UserService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadingState = true;
    this.loadData();
  }

  refresh() {
    this.loadingState = true;
    this.loadData();
  }

  
  addNew(user: IUser) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.userService.dataChange.value.push(dialogRef.componentInstance.newUser);
        this.refreshTable();
      }
    });
  }

  startEdit(id: number, userName: string, firstName: string, lastName: string, isReadOnly: boolean, canComment: boolean, isContributer: boolean, isAdmin: boolean) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    console.log(this.id);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {id: id, userName: userName, firstName: firstName, lastName: lastName, isReadOnly: isReadOnly, canComment: canComment, isContributer: isContributer, isAdmin: isAdmin}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.userService.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.userService.dataChange.value[foundIndex] = dialogRef.componentInstance.user;
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(id: number, userName: string, firstName: string, lastName: string, isReadOnly: boolean, canComment: boolean, isContributer: boolean, isAdmin: boolean) {
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id: id, userName: userName, firstName: firstName, lastName: lastName, isReadOnly: isReadOnly, canComment: canComment, isContributer: isContributer, isAdmin: isAdmin}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.userService.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.userService.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }
  
  // If you don't need a filter or a pagination this can be simplified, you just use code from else block
  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }

  public loadData() {
    this.loadingState = false;
    this.userService = new UserService(this.httpClient);
    this.dataSource = new UserDataSource(this.userService, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

}


export class UserDataSource extends DataSource<IUser> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: IUser[] = [];
  renderedData: IUser[] = [];

  constructor(public _userDatabase: UserService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IUser[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._userDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._userDatabase.getAllUsers(Global.BASE_USER_ENDPOINT + 'getAllUser');

      return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._userDatabase.data.slice().filter((user: IUser) => {
        const searchStr = (user.id.toString() + user.userName).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
      });
    }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: IUser[]): IUser[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.userName, b.userName]; break;  
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
