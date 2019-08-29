import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidyouknowComponent } from './didyouknow.component';

describe('DidyouknowComponent', () => {
  let component: DidyouknowComponent;
  let fixture: ComponentFixture<DidyouknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidyouknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidyouknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
