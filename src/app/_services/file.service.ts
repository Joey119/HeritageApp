import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { ISystemFile } from '../_models';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable()
export class FilesService {
    files: ISystemFile[];

    constructor(private http: HttpClient) { }

    getFiles(url: string): Observable<ISystemFile[]> {
        return this.http.get<ISystemFile[]>(url)
        .pipe(
            map(files => {
                this.files = files;
                return this.files;
            }),

            catchError(this.handleError)
        )
    }

    deleteFile(url: string): Observable<Object> {       
        return this.http.delete(url) // ...using put request
        .pipe(
            map(res => {
                return res;
            }),

            catchError(this.handleError)
        )
    }

    public downloadFile(url: string): Observable<Blob>
    {
        return this.http
        .get(url, {responseType: "blob"
          })
        //this.getAuthHeader(false, true))
        .pipe(
            map(res => {
                return res;
            }),

            catchError(this.handleError)
        )
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
        return throwError('Something bad happened; please try again later.' || 'Server error');
    }
}