import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';

// describe('DataService', () => {
//   let service: DataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return Observable with salarie data', () => {
    const salarieMock = { id_salarie: 2 };

    service.getOneSalarie(salarieMock.id_salarie).subscribe((data) => {
      expect(data).toEqual(salarieMock);
    });

    const req = httpMock.expectOne(service.urlDB + '/entreprise/salarie/' + salarieMock.id_salarie);
    expect(req.request.method).toBe('GET');
    req.flush(salarieMock);
  });
});
