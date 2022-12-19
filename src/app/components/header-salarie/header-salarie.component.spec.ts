import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSalarieComponent } from './header-salarie.component';

describe('HeaderSalarieComponent', () => {
  let component: HeaderSalarieComponent;
  let fixture: ComponentFixture<HeaderSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
