import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFirst } from './sample-first';

describe('SampleFirst', () => {
  let component: SampleFirst;
  let fixture: ComponentFixture<SampleFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleFirst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleFirst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
