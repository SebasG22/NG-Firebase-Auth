import { Action } from '@ngrx/store';

export const REGISTER_USER_WITH_EMAIL = '[ AUTH ] - REGISTER USER WITH EMAIL';
export const REGISTER_USER_WITH_EMAIL_SUCCESS = '[ AUTH ] - REGISTER USER WITH EMAIL SUCCESS';
export const REGISTER_USER_WITH_EMAIL_FAILED = '[ AUTH ] - REGISTER USER WITH EMAIL FAILED';

export const LOGIN_USER_WITH_FACEBOOK = '[ AUTH ] - LOGIN USER WITH FACEBOOK';
export const LOGIN_USER_WITH_FACEBOOK_SUCCESS = '[ AUTH ] - LOGIN USER WITH FACEBOOK SUCCESS';
export const LOGIN_USER_WITH_FACEBOOK_FAILED = '[ AUTH ] - LOGIN USER WITH FACEBOOK FAILED';

export const LOGIN_USER_WITH_GOOGLE = '[ AUTH ] - LOGIN USER WITH GOOGLE';
export const LOGIN_USER_WITH_GOOGLE_SUCCESS = '[ AUTH ] - LOGIN USER WITH GOOGLE SUCCESS';
export const LOGIN_USER_WITH_GOOGLE_FAILED = '[ AUTH ] - LOGIN USER WITH GOOGLE FAILED';

export const LOGIN_USER_WITH_GITHUB = '[ AUTH ] - LOGIN USER WITH GITHUB';
export const LOGIN_USER_WITH_GITHUB_SUCCESS = '[ AUTH ] - LOGIN USER WITH GITHUB SUCCESS';
export const LOGIN_USER_WITH_GITHUB_FAILED = '[ AUTH ] - LOGIN USER WITH GITHUB FAILED';


export const LOGIN_USER_WITH_EMAIL = '[ AUTH ] - LOGIN USER WITH EMAIL';
export const LOGIN_USER_WITH_EMAIL_SUCCESS = '[ AUTH ] - LOGIN USER WITH EMAIL SUCCESS';
export const LOGIN_USER_WITH_EMAIL_FAILED = '[ AUTH ] - LOGIN USER WITH EMAIL FAILED';


export const LOGOUT_USER = '[ AUTH ] - LOGOUT USER';
export const LOGOUT_USER_SUCCESS = '[ AUTH ] - LOGOUT USER SUCCESS';
export const LOGOUT_USER_FAILED = '[ AUTH ] - LOGOUT USER FAILED';

export class RegisterUserWithEmail implements Action {
    readonly type = REGISTER_USER_WITH_EMAIL;
    constructor(public payload: any) { }
}

export class RegisterUserWithEmailSuccess implements Action {
    readonly type = REGISTER_USER_WITH_EMAIL_SUCCESS;
    constructor(public payload: any) { }
}

export class RegisterUserWithEmailFailed implements Action {
    readonly type = REGISTER_USER_WITH_EMAIL_FAILED;
    constructor(public payload: any) { }
}

export class LoginUserWithEmail implements Action {
    readonly type = LOGIN_USER_WITH_EMAIL;
    constructor(public payload: any) { }
}

export class LoginUserWithEmailSuccess implements Action {
    readonly type = LOGIN_USER_WITH_EMAIL_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginUserWithEmailFailed implements Action {
    readonly type = LOGIN_USER_WITH_EMAIL_FAILED;
    constructor(public payload: any) { }
}

export class LoginUserWithFacebook implements Action {
    readonly type = LOGIN_USER_WITH_FACEBOOK;
    constructor() { }
}

export class LoginUserWithFacebookSuccess implements Action {
    readonly type = LOGIN_USER_WITH_FACEBOOK_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginUserWithFacebookFailed implements Action {
    readonly type = LOGIN_USER_WITH_FACEBOOK_FAILED;
    constructor(public payload: any) { }
}
export class LoginUserWithGoogle implements Action {
    readonly type = LOGIN_USER_WITH_GOOGLE;
    constructor() { }
}

export class LoginUserWithGoogleSuccess implements Action {
    readonly type = LOGIN_USER_WITH_GOOGLE_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginUserWithGoogleFailed implements Action {
    readonly type = LOGIN_USER_WITH_GOOGLE_FAILED;
    constructor(public payload: any) { }
}

export class LoginUserWithGithub implements Action {
    readonly type = LOGIN_USER_WITH_GITHUB;
    constructor() { }
}

export class LoginUserWithGithubSuccess implements Action {
    readonly type = LOGIN_USER_WITH_GITHUB_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginUserWithGithubFailed implements Action {
    readonly type = LOGIN_USER_WITH_GITHUB_FAILED;
    constructor(public payload: any) { }
}

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
    constructor(public payload: any = null) { }
}

export class LogoutUserSuccess implements Action {
    readonly type = LOGOUT_USER_SUCCESS;
    constructor(public payload: any = null) { }
}

export class LogoutUserFailed implements Action {
    readonly type = LOGOUT_USER_FAILED;
    constructor(public payload: any) { }
}

export type All =
    RegisterUserWithEmail |
    RegisterUserWithEmailSuccess |
    RegisterUserWithEmailFailed |
    LoginUserWithFacebook |
    LoginUserWithFacebookSuccess |
    LoginUserWithFacebookFailed |
    LoginUserWithGoogle |
    LoginUserWithGoogleSuccess |
    LoginUserWithGoogleFailed |
    LoginUserWithGithub |
    LoginUserWithGithubSuccess |
    LoginUserWithGithubFailed |
    LoginUserWithEmail |
    LoginUserWithEmailSuccess |
    LoginUserWithEmailFailed |
    LogoutUser |
    LogoutUserSuccess |
    LogoutUserFailed;


