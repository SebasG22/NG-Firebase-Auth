/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginEmailPage } from './login-email.page';


describe('LoginEmailPage', () => {
  let component: LoginEmailPage;
  let fixture: ComponentFixture<LoginEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEmailPage]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
