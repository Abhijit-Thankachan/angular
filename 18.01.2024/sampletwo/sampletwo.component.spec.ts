import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletwoComponent } from './sampletwo.component';

describe('SampletwoComponent', () => {
  let component: SampletwoComponent;
  let fixture: ComponentFixture<SampletwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampletwoComponent]
    });
    fixture = TestBed.createComponent(SampletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
