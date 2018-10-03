import * as authActions from '../actions/auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Actions = authActions.All;

export interface AuthFeatureModel {
    auth: State;
}

export interface State {
    verifyAuth: boolean;
    userLogged: any;
}

const initialState: State = {
    verifyAuth: null,
    userLogged: null
};

export function reducer(state: State = initialState, action: Actions) {
    switch (action.type) {
        case authActions.REGISTER_USER_WITH_EMAIL:
        case authActions.LOGIN_USER_WITH_EMAIL:
            return state;

        case authActions.REGISTER_USER_WITH_EMAIL_SUCCESS:
        case authActions.LOGIN_USER_WITH_EMAIL_SUCCESS:
        case authActions.LOGIN_USER_WITH_FACEBOOK_SUCCESS:
        case authActions.LOGIN_USER_WITH_GOOGLE_SUCCESS:
            return { ...state, userLogged: action.payload };

        case authActions.REGISTER_USER_WITH_EMAIL_FAILED:
        case authActions.LOGIN_USER_WITH_EMAIL_FAILED:
        case authActions.LOGIN_USER_WITH_FACEBOOK_FAILED:
        case authActions.LOGIN_USER_WITH_GOOGLE_FAILED:
            return { ...state, userLogged: null };
    }
}

export const reducers = {
    auth: reducer
};

export const selectAuthState = createFeatureSelector<AuthFeatureModel>('AuthFeatureModel');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthFeatureModel) => state.auth
);

export const getAuthVerifyState = createSelector(selectAuthStatusState, (state: State) => state.verifyAuth);

export const getAuthUserLogged = createSelector(selectAuthStatusState, (state: State) => state.userLogged);

