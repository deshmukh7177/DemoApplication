import { TestBed } from '@angular/core/testing';

import { ShapeserviceService } from './shapeservice.service';

describe('ShapeserviceService', () => {
  let service: ShapeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
