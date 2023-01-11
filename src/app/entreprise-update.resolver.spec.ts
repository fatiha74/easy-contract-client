import { TestBed } from '@angular/core/testing';

import { EntrepriseUpdateResolver } from './entreprise-update.resolver';

describe('EntrepriseUpdateResolver', () => {
  let resolver: EntrepriseUpdateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EntrepriseUpdateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
