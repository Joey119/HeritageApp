import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { empty } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
        public router: Router) { }

    public login(url: string, username: string, password: string) {
        return this.http.post<any>(url, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    public isAuthenticated(): boolean {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null && user != empty)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public handleAuthentication(): void {
        if ((this.router.url == '/') || this.isAuthenticated())
        {
            this.router.navigate(['/welcome']);
        }
        else
        {
            this.router.navigate(['/login']);
            console.log("Please log in.")
        }
    }
}