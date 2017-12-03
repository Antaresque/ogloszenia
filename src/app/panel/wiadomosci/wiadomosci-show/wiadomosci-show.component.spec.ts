import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiadomosciShowComponent } from './wiadomosci-show.component';

describe('WiadomosciShowComponent', () => {
  let component: WiadomosciShowComponent;
  let fixture: ComponentFixture<WiadomosciShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiadomosciShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiadomosciShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
