import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSalarieComponent } from './login-salarie.component';

describe('LoginSalarieComponent', () => {
  let component: LoginSalarieComponent;
  let fixture: ComponentFixture<LoginSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
