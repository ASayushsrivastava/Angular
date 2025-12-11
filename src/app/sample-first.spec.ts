import { TestBed } from '@angular/core/testing';
import { SampleFirst } from './sample-first/sample-first';

describe('SampleFirst', () => {
  let service: SampleFirst;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleFirst);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
