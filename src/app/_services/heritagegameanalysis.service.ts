import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/of'
import { environment } from '../../environments/environment';
import { IHeritageGameAnalysis } from '../_models';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable()
export class HeritageGameAnalysisService {

    heritageGameAnalysis: IHeritageGameAnalysis;

    constructor(private http: HttpClient) { }

    getHeritageGameAnalysis(url: string): Observable<IHeritageGameAnalysis> {
        return this.http.get<IHeritageGameAnalysis>(url)
            .pipe(
                map(gameAnalysis => {
                    this.heritageGameAnalysis = gameAnalysis;
                    return this.heritageGameAnalysis;
                }),

                catchError(this.handleError)
            )
    }

    getHeritageAnalysisBestRoute(url: string): Observable<any> {
        return this.http.get(url)
            .pipe(
                map(gameAnalysisBestRoute => {
                    return Observable.of(gameAnalysisBestRoute);
                }),

                catchError(this.handleError)
            )
    }

    addHeritageGameAnalysis(url: string, gameAnalysis: IHeritageGameAnalysis): Observable<IHeritageGameAnalysis> {
        return this.http.post<IHeritageGameAnalysis>(url, gameAnalysis)
            .pipe(
                map(resultGameAnalysis => {
                    this.heritageGameAnalysis = resultGameAnalysis;
                    return this.heritageGameAnalysis;
                }),

                catchError(this.handleError)
            )
    }

    updateHeritageGameAnalysis(url: string, gameAnalysis: IHeritageGameAnalysis): Observable<IHeritageGameAnalysis> {
        return this.http.put<IHeritageGameAnalysis>(url, gameAnalysis) // ...using put request
            .pipe(
                map(resultGameAnalysis => {
                    this.heritageGameAnalysis = resultGameAnalysis;
                    return this.heritageGameAnalysis;
                }),

                catchError(this.handleError)
            )
    }

    deleteHeritageGameAnalysis(url: string, id: number): Observable<any> {
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

