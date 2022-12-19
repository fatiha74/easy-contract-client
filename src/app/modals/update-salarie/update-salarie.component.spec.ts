import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalarieComponent } from './update-salarie.component';

describe('UpdateSalarieComponent', () => {
  let component: UpdateSalarieComponent;
  let fixture: ComponentFixture<UpdateSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
