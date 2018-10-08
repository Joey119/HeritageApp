import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IHeritage } from '../_models';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable()
export class HeritageService {

    dataChange: BehaviorSubject<IHeritage[]> = new BehaviorSubject<IHeritage[]>([]);
    heritage: IHeritage;

    constructor(private http: HttpClient) { }
    
    get data(): IHeritage[] {
        return this.dataChange.value;
    }

    /*
    getAllHeritage(url: string): Observable<IHeritage[]> {
        return this.http.get<IHeritage[]>(url)
        .pipe(
            catchError(this.handleError)
        );
    }
    */

    getAllHeritage(url: string): void {
        this.http.get<IHeritage[]>(url).subscribe(data => {
            this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    }

    getHeritage(url: string): Observable<IHeritage> {
        return this.http.get<IHeritage>(url)
        .pipe(
            map(heritage => {
                this.heritage = heritage;
                return this.heritage;
            }),

            catchError(this.handleError)
        )
    }

    addHeritage(url: string, heritage: IHeritage): void {
        this.http.post<IHeritage>(url, heritage, httpOptions).subscribe(data => {
            this.heritage = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

    updateHeritage(url: string, heritage: IHeritage): void {
        this.http.put<IHeritage>(url, heritage, httpOptions).subscribe(data => {
            this.heritage = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

    deleteHeritage(url: string, id: number): void {
        this.http.delete(url + id, httpOptions).subscribe(data => {
            console.log('Heritage was successfully deleted');
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

        // custom handler
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }


}

