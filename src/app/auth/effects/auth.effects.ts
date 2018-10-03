import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AUthService } from '../services/auth.service';
import * as authActions from '../actions/auth.actions';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    @Effect()
    registerUserWithEmail$ = this.actions$.ofType(authActions.REGISTER_USER_WITH_EMAIL)
        .pipe(
            map((action: any) => action.payload),
            switchMap((payload) => {
                return this.authService.registerWithEmail(payload)
                    .pipe(
                        map((data) => {
                            return new authActions.RegisterUserWithEmailSuccess(data);
                        })
                    );
            }),
            catchError(error => [new authActions.RegisterUserWithEmailFailed(error)])
        );

    @Effect()
    loginUserWithEmail$ = this.actions$.ofType(authActions.LOGIN_USER_WITH_EMAIL)
        .pipe(
            map((action: any) => action.payload),
            switchMap((payload) => {
                return this.authService.loginWithEmail(payload)
                    .pipe(
                        map((data) => {
                            return new authActions.LoginUserWithEmailSuccess(data);
                        })
                    );
            }),
            catchError(error => [new authActions.LoginUserWithEmailFailed(error)])
        );

    @Effect()
    loginUserWithFacebook$ = this.actions$.ofType(authActions.LOGIN_USER_WITH_FACEBOOK)
        .pipe(
            switchMap((payload) => {
                return this.authService.loginWithFacebook()
                    .pipe(
                        map((data) => {
                            return new authActions.LoginUserWithFacebookSuccess(data);
                        })
                    );
            }),
            catchError(error => [new authActions.LoginUserWithFacebookFailed(error)])
        );

    @Effect()
    loginUserWithGoogle$ = this.actions$.ofType(authActions.LOGIN_USER_WITH_GOOGLE)
        .pipe(
            switchMap((payload) => {
                return this.authService.loginWithGoogle()
                    .pipe(
                        map((data) => {
                            return new authActions.LoginUserWithGoogleSuccess(data);
                        })
                    );
            }),
            catchError(error => [new authActions.LoginUserWithGoogleFailed(error)])
        );


    constructor(
        private actions$: Actions,
        private authService: AUthService
    ) { }
}
