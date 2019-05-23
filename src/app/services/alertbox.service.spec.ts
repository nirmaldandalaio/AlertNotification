import { TestBed } from '@angular/core/testing';

import { AlertBoxService } from './alertbox.service';

describe('AlertboxService', () => {
  let service: AlertBoxService;
  beforeEach(() => { service = new AlertBoxService(); });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AlertBoxService ]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
