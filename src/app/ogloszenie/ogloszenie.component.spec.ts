import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszenieComponent } from './ogloszenie.component';

describe('OgloszenieComponent', () => {
  let component: OgloszenieComponent;
  let fixture: ComponentFixture<OgloszenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgloszenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
