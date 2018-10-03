/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginMainPage } from './login-main.page';

describe('LoginMainComponent', () => {
  let component: LoginMainPage;
  let fixture: ComponentFixture<LoginMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginMainPage]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
