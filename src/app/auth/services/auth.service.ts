import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from } from 'rxjs';

@Injectable()
export class AUthService {

    constructor(private _afAuth: AngularFireAuth) { }

    public registerWithEmail({ email, password }) {
        return from(this._afAuth.auth.createUserWithEmailAndPassword(email, password));
    }

    public loginWithEmail({ email, password }) {
        return from(this._afAuth.auth.signInWithEmailAndPassword(email, password));
    }

    public loginWithFacebook() {
        return from(this._afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()));
    }

    public loginWithGoogle() {
        return from(this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
    }

    public logout() {
        return from(this._afAuth.auth.signOut());
    }


}
