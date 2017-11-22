import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserwowaneComponent } from './obserwowane.component';

describe('ObserwowaneComponent', () => {
  let component: ObserwowaneComponent;
  let fixture: ComponentFixture<ObserwowaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserwowaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserwowaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
