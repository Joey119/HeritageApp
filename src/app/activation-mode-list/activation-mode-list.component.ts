import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivationModeAddDialogComponent, ActivationModeDeleteDialogComponent, ActivationModeEditDialogComponent } from '../_dialogs';
import { ActivationModeService } from '../_services';
import { Global } from '../_shared';
import { IActivationMode } from '../_models';

@Component({
  selector: 'app-activation-mode-list',
  templateUrl: './activation-mode-list.component.html',
  styleUrls: ['./activation-mode-list.component.scss']
})
export class ActivationModeListComponent implements OnInit {

  loadingState: boolean;
  displayedColumns = ['id', 'activationModeName', 'upperBound', 'lowerBound', 'actions'];
  actModeService: ActivationModeService | null;
  dataSource: ActModeDataSource | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public _actModeService: ActivationModeService
  ) { }

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
  addNew(activationMode: IActivationMode) {
    const dialogRef = this.dialog.open(ActivationModeAddDialogComponent, {
      data: { actMode: activationMode }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.actModeService.dataChange.value.push(dialogRef.componentInstance.newActMode);
        this.refreshTable();
      }
    });
  }

  startEdit(id: number, activationModeName: string, upperBound: number, lowerBound: number, activationModeDescription: string) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    console.log(this.id);
    const dialogRef = this.dialog.open(ActivationModeEditDialogComponent, {
      data: { id: id, activationModeName: activationModeName, upperBound: upperBound, lowerBound: lowerBound, activationModeDescription: activationModeDescription }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.actModeService.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.actModeService.dataChange.value[foundIndex] = dialogRef.componentInstance.actMode;
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(id: number, actModeName: string, upperBound: number, lowerBound: number, activationModeDescription: string) {
    this.id = id;
    const dialogRef = this.dialog.open(ActivationModeDeleteDialogComponent, {
      data: { id: id, activationModeName: actModeName, upperBound: upperBound, lowerBound: lowerBound, activationModeDescription: activationModeDescription }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.actModeService.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.actModeService.dataChange.value.splice(foundIndex, 1);
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
    this.actModeService = new ActivationModeService(this.httpClient);
    this.dataSource = new ActModeDataSource(this.actModeService, this.paginator, this.sort);
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


export class ActModeDataSource extends DataSource<IActivationMode> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: IActivationMode[] = [];
  renderedData: IActivationMode[] = [];

  constructor(
    public _actModeDataService: ActivationModeService,
    public _paginator: MatPaginator,
    public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IActivationMode[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._actModeDataService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._actModeDataService.getAllActModes(Global.BASE_ACTIVATION_MODE_ENDPOINT + 'getAllActMode');

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._actModeDataService.data.slice().filter((actMode: IActivationMode) => {
        const searchStr = (actMode.id + actMode.activationModeName).toLowerCase();
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
  sortData(data: IActivationMode[]): IActivationMode[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.activationModeName, b.activationModeName]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}