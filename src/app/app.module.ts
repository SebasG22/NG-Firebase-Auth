import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import * as appReducer from './app.reducer';

export const metaReducers = environment.production ? [] : [logger];

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot(appReducer.reducersToken, { metaReducers })
  ],
  providers: [
    appReducer.reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
