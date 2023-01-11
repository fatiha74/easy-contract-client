import { TestBed } from '@angular/core/testing';

import { AuthsalarieGuard } from './authsalarie.guard';

describe('AuthsalarieGuard', () => {
  let guard: AuthsalarieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthsalarieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
