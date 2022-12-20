import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratModalComponent } from './contrat-modal.component';

describe('ContratModalComponent', () => {
  let component: ContratModalComponent;
  let fixture: ComponentFixture<ContratModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
