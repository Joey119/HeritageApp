import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, empty } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../_models';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class UserService {

    dataChange: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
    dialogData: any;
    user: Object;

    constructor(private http: HttpClient) { }

    get data(): IUser[] {
        return this.dataChange.value;
    }

    getDialogData() {
        return this.dialogData;
    }

    getAllUsers(url: string): void {
        this.http.get<IUser[]>(url, httpOptions).subscribe(data => {
            this.dataChange.next(data);
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

    getUserById(url: string, id: number): void {
        this.http.get<IUser>(url, httpOptions).subscribe(data => {
            this.dialogData = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });        
    }

    addUser(url: string, user: IUser): void {
        this.http.post(url, user, httpOptions).subscribe(data => {
            this.dialogData = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

    register(url: string, user: IUser): Observable<Object> {
        return this.http.post(url, user, httpOptions)
        .pipe(
            map(user => {
                this.user = user;
                return this.user;
            }),
            
            catchError(this.handleError)
        )           
    }

    updateUser(url: string, user: IUser): void {
        this.http.put(url, user, httpOptions).subscribe(data => {
            this.dialogData = data;
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }

    deleteUser(url: string, id: number): void {
        this.http.delete(url + id, httpOptions).subscribe(data => {
            console.log('User was successfully deleted');
        },
        (err: HttpErrorResponse) => {
            console.log (err.name + ' ' + err.message);
        });
    }
    
    public currentUserId(): number {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != empty)
        {
            return user.id;
        }
        else
        {
            return 0;
        }
    }

    public currentUserName(): string {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != empty)
        {
            return user.userName;
        }
        else
        {
            return 'Unknown';
        }
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