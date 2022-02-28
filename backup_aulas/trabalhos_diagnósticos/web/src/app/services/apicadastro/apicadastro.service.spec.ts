import { TestBed } from '@angular/core/testing';

import { ApicadastroService } from './apicadastro.service';

describe('ApicadastroService', () => {
  let service: ApicadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
