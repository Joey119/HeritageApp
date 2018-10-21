import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IHeritageEvaluation } from '../_models';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable()
export class HeritageEvaluationService {

    heritageEvaluations: IHeritageEvaluation[];
    heritageEvaluation: IHeritageEvaluation;

    constructor(private http: HttpClient) { }

    getAllHeritageEvaluations(url: string): Observable<IHeritageEvaluation[]> {
        return this.http.get<IHeritageEvaluation[]>(url)
            .pipe(
                map(evaluations => {
                    this.heritageEvaluations = evaluations;
                    return this.heritageEvaluations;
                }),

                catchError(this.handleError)
            )
    }

    getHeritageEvaluation(url: string): Observable<IHeritageEvaluation> {
        return this.http.get<IHeritageEvaluation>(url)
            .pipe(
                map(evaluation => {
                    this.heritageEvaluation = evaluation;
                    return this.heritageEvaluation;
                }),

                catchError(this.handleError)
            )
    }

    addHeritageEvaluation(url: string, evaluation: IHeritageEvaluation): Observable<IHeritageEvaluation> {
        return this.http.post<IHeritageEvaluation>(url, evaluation)
            .pipe(
                map(resultEvaluation => {
                    this.heritageEvaluation = resultEvaluation;
                    return this.heritageEvaluation;
                }),

                catchError(this.handleError)
            )
    }

    updateHeritageEvaluation(url: string, evaluation: IHeritageEvaluation): Observable<IHeritageEvaluation> {
        return this.http.put<IHeritageEvaluation>(url, evaluation) // ...using put request
            .pipe(
                map(resultEvaluation => {
                    this.heritageEvaluation = resultEvaluation;
                    return this.heritageEvaluation;
                }),

                catchError(this.handleError)
            )
    }

    deleteHeritageEvaluation(url: string, id: number): Observable<any> {
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

