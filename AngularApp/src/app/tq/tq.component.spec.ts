import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqComponent } from './tq.component';

describe('TqComponent', () => {
  let component: TqComponent;
  let fixture: ComponentFixture<TqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
