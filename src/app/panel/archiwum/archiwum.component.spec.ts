import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiwumComponent } from './archiwum.component';

describe('ArchiwumComponent', () => {
  let component: ArchiwumComponent;
  let fixture: ComponentFixture<ArchiwumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiwumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiwumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
