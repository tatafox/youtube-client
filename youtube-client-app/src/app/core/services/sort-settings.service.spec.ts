import { TestBed } from '@angular/core/testing';

import { SortSettingsService } from './sort-settings.service';

describe('SortSettingsService', () => {
  let service: SortSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
