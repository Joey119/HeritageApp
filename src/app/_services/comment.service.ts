/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IComment } from '../_models';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
     // Resolve HTTP using the constructor
     constructor (private http: HttpClient) {}
     private heritageComment: IComment[];
     private comment: IComment;
     
     // Fetch all existing comments
     getComments(url: string) : Observable<IComment[]>{
         // ...using get request
         return this.http.get<IComment[]>(url)
         .pipe(
            map(comment => {
                this.heritageComment = comment;
                return this.heritageComment;
            }),

            catchError(this.handleError)
        )
     }

     // Add a new comment
    addComment (url: string, body: Object): Observable<IComment> {
        return this.http.post<IComment>(url, body) // ...using post request
        .pipe(
            map(comment => {
                this.comment = comment;
                return this.comment;
            }),

            catchError(this.handleError)
        )
    }   

    // Update a comment
    updateComment (url: string, body: Object): Observable<IComment> {
        return this.http.put<IComment>(url, body) // ...using put request
        .pipe(
            map(comment => {
                this.comment = comment;
                return this.comment;
            }),

            catchError(this.handleError)
        )
    }   

    updateVote (url: string, body: Object): Observable<IComment> {
        return this.http.put<IComment>(url, body) // ...using put request
        .pipe(
            map(comment => {
                this.comment = comment;
                return this.comment;
            }),

            catchError(this.handleError)
        )
    } 

    // Delete a comment
    removeComment (url: string): Observable<Object> {
        return this.http.delete(url) // ...using put request
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
