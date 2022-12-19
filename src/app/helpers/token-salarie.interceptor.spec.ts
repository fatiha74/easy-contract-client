import { TestBed } from '@angular/core/testing';

import { TokenSalarieInterceptor } from './token-salarie.interceptor';

describe('TokenSalarieInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenSalarieInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenSalarieInterceptor = TestBed.inject(TokenSalarieInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
