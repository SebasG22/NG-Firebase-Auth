import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth.routing';
import { PAGES } from './pages';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/auth.reducer';

@NgModule({
    declarations: [
        COMPONENTS,
        PAGES
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        StoreModule.forFeature('AuthFeatureModel', reducers)
    ],
    exports: [],
    providers: [],
})
export class AuthModule { }
