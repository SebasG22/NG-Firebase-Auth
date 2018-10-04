import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginMainPage } from './pages/login-main/login-main.page';
import { LoginEmailPage } from './pages/login-email/login-email.page';

const routes: Routes = [
    { path: '', component: LoginMainPage },
    { path: 'email', component: LoginEmailPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
