import { TestBed, inject } from '@angular/core/testing';

import { TbsService } from './tbs.service';

describe('TbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TbsService]
    });
  });

  it('should be created', inject([TbsService], (service: TbsService) => {
    expect(service).toBeTruthy();
  }));
});
