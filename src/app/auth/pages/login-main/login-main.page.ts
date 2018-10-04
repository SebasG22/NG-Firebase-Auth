import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginUserWithFacebook, LoginUserWithGoogle, LoginUserWithGithub } from '../../actions/auth.actions';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss']
})
export class LoginMainPage implements OnInit {

  constructor(
    private store: Store<{}>
  ) { }

  ngOnInit() {
  }

  public onLoggingWith(provider: 'facebook' | 'google' | 'github' | 'email') {
    switch (provider) {
      case 'facebook':
        return this.store.dispatch(new LoginUserWithFacebook());
      case 'google':
        return this.store.dispatch(new LoginUserWithGoogle());
      case 'github':
        return this.store.dispatch(new LoginUserWithGithub());
    }
  }

}
