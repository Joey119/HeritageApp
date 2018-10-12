import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { HeritageService } from '../_services';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatDialog} from '@angular/material';
import { IHeritage } from '../_models';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ToastrService } from 'ngx-toastr';
import { Global } from '../_shared';
import { HeritageDeleteDialogComponent } from '../_dialogs';


@Component({
  selector: 'app-heritage-list',
  templateUrl: './heritage-list.component.html',
  styleUrls: ['./heritage-list.component.scss']
})
export class HeritageListComponent implements OnInit{
  displayedColumns = ['id', 'name', 'registrationDistrict', 'registrationYear', 'province', 'typeofProject', 'inheritors', 'currentStatus', 'createdOn', 'actions'];
  //heritageDatabase: HeritageService;
  dataSource: HeritageDataSource;
  index: number;
  id: number;
  loadingState: boolean;
  heritages: IHeritage[];

  constructor(public httpClient: HttpClient,
              public _heritageService: HeritageService,
              private toastr: ToastrService,
              public dialog: MatDialog) {}

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

  deleteItem(id: number, name: string) {
    this.id = id;
    const dialogRef = this.dialog.open(HeritageDeleteDialogComponent, {
      data: {id: id, name: name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this._heritageService.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this._heritageService.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  
  /*
  deleteHeritage(id: number): void {
    let r = confirm("Are you sure?");
 		if (r == true) {
        this._heritageService.deleteHeritage(Global.BASE_HERITAGE_ENDPOINT, id)
        .subscribe(
          data => {
            this.toastr.success("Heritage was suceessfully deleted.", "Succeeded");
            this.refresh();
          }
        );
     }
     else
     {
       return;
     }
  }
  */  
  
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
       this._heritageService = new HeritageService(this.httpClient);
       this.dataSource = new HeritageDataSource(this._heritageService, this.paginator, this.sort);
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


export class HeritageDataSource extends DataSource<IHeritage> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: IHeritage[] = [];
  renderedData: IHeritage[] = [];

  constructor(public _heritageService: HeritageService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IHeritage[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._heritageService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._heritageService.getAllHeritage(Global.BASE_HERITAGE_ENDPOINT + 'getAllHeritage');

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._heritageService.data.slice().filter((heirtage: IHeritage) => {
        const searchStr = (heirtage.id + heirtage.name + heirtage.registrationDistrict + heirtage.registrationYear).toLowerCase();
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
  sortData(data: IHeritage[]): IHeritage[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'registrationDistrict': [propertyA, propertyB] = [a.registrationDistrict, b.registrationDistrict]; break;
        case 'registrationYear': [propertyA, propertyB] = [a.registrationYear, b.registrationYear]; break;
        case 'province': [propertyA, propertyB] = [a.province, b.province]; break;
        case 'inheritors': [propertyA, propertyB] = [a.inheritors, b.inheritors]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}
