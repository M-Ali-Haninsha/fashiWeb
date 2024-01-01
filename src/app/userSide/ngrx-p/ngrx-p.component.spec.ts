import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPComponent } from './ngrx-p.component';

describe('NgrxPComponent', () => {
  let component: NgrxPComponent;
  let fixture: ComponentFixture<NgrxPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxPComponent]
    });
    fixture = TestBed.createComponent(NgrxPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
