import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeogComponent } from './mojeog.component';

describe('MojeogComponent', () => {
  let component: MojeogComponent;
  let fixture: ComponentFixture<MojeogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
