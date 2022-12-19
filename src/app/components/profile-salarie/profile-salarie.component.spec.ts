import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSalarieComponent } from './profile-salarie.component';

describe('ProfileSalarieComponent', () => {
  let component: ProfileSalarieComponent;
  let fixture: ComponentFixture<ProfileSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
