import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstatnioComponent } from './ostatnio.component';

describe('OstatnioComponent', () => {
  let component: OstatnioComponent;
  let fixture: ComponentFixture<OstatnioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstatnioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstatnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
