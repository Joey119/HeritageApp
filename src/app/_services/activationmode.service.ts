import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, empty } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IActivationMode } from '../_models';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class ActivationModeService {

    dataChange: BehaviorSubject<IActivationMode[]> = new BehaviorSubject<IActivationMode[]>([]);
    dialogData: any;
    activationMode: IActivationMode;

    constructor(private http: HttpClient) { }

    get data(): IActivationMode[] {
        return this.dataChange.value;
    }

    getDialogData() {
        return this.dialogData;
    }

    getAllActModes(url: string): void {
        this.http.get<IActivationMode[]>(url, httpOptions).subscribe(data => {
            this.dataChange.next(data);
        },
            (err: HttpErrorResponse) => {
                console.log(err.name + ' ' + err.message);
            });
    }

    getActModeById(url: string): Observable<IActivationMode> {
        return this.http.get<IActivationMode>(url)
            .pipe(
                map(actMode => {
                    this.activationMode = actMode;
                    return this.activationMode;
                }),

                catchError(this.handleError)
            )
    }

    addActMode(url: string, actMode: IActivationMode): Observable<IActivationMode> {
        return this.http.post<IActivationMode>(url, actMode)
            .pipe(
                map(actMode => {
                    this.activationMode = actMode;
                    return this.activationMode;
                }),

                catchError(this.handleError)
            )

    }

    updateActMode(url: string, actMode: IActivationMode): Observable<IActivationMode> {
        return this.http.put<IActivationMode>(url, actMode)
            .pipe(
                map(actMode => {
                    this.activationMode = actMode;
                    return this.activationMode;
                }),

                catchError(this.handleError)
            )

    }

    deleteActMode(url: string, id: number): Observable<Object> {
        return this.http.delete(url + id)
            .pipe(
                map(data => {
                    return data;
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
        return throwError('Something bad happened; please try again later.');
    }


}