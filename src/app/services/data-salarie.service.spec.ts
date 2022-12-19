import { TestBed } from '@angular/core/testing';

import { DataSalarieService } from './data-salarie.service';

describe('DataSalarieService', () => {
  let service: DataSalarieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSalarieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
