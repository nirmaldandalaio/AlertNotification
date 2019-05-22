import { TestBed } from '@angular/core/testing';

import { AlertBoxService } from './alertbox.service';

describe('AlertboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AlertBoxService ]
  }));

  it('should be created', () => {
    const service: AlertBoxService = TestBed.get(AlertBoxService);
    expect(service).toBeTruthy();
  });
});
