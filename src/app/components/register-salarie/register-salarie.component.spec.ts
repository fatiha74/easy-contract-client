import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalarieComponent } from './register-salarie.component';

describe('RegisterSalarieComponent', () => {
  let component: RegisterSalarieComponent;
  let fixture: ComponentFixture<RegisterSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
