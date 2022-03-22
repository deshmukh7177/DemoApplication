import { TestBed } from '@angular/core/testing';

import { UserserciesService } from './usersercies.service';

describe('UserserciesService', () => {
  let service: UserserciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
