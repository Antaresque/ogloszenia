import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrybutyComponent } from './atrybuty.component';

describe('AtrybutyComponent', () => {
  let component: AtrybutyComponent;
  let fixture: ComponentFixture<AtrybutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrybutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrybutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
