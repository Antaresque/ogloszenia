import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWyszukiwrkaComponent } from './form-wyszukiwrka.component';

describe('FormWyszukiwrkaComponent', () => {
  let component: FormWyszukiwrkaComponent;
  let fixture: ComponentFixture<FormWyszukiwrkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWyszukiwrkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWyszukiwrkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
