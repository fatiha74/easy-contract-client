import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSalariesComponent } from './mes-salaries.component';

describe('MesSalariesComponent', () => {
  let component: MesSalariesComponent;
  let fixture: ComponentFixture<MesSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesSalariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
