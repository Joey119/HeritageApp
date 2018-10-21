/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IEvaluatorType } from '../_models';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EvaluatorTypeService {
    // Resolve HTTP using the constructor
    constructor(private http: HttpClient) { }
    private evaluatorType: IEvaluatorType[];

    getEvaluatorTypes(url: string): Observable<IEvaluatorType[]> {
        // ...using get request
        return this.http.get<IEvaluatorType[]>(url)
            .pipe(
                map(evaluatorType => {
                    this.evaluatorType = evaluatorType;
                    return this.evaluatorType;
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
