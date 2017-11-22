import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StworzComponent } from './stworz.component';

describe('StworzComponent', () => {
  let component: StworzComponent;
  let fixture: ComponentFixture<StworzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StworzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StworzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
