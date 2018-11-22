import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // clone the request then update it before sending it
        const copiedReq = req.clone({headers: req.headers.set('authorization', this.authService.getToken())});
        return next.handle(copiedReq);
    }
}
