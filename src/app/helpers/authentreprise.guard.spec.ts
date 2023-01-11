import { TestBed } from '@angular/core/testing';

import { AuthentrepriseGuard } from './authentreprise.guard';

describe('AuthentrepriseGuard', () => {
  let guard: AuthentrepriseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentrepriseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
