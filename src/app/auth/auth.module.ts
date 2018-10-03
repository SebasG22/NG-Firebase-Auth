import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth.routing';
import { PAGES } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        COMPONENTS,
        PAGES
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class AuthModule { }
