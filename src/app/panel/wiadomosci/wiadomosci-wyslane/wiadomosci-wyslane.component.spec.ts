import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiadomosciWyslaneComponent } from './wiadomosci-wyslane.component';

describe('WiadomosciWyslaneComponent', () => {
  let component: WiadomosciWyslaneComponent;
  let fixture: ComponentFixture<WiadomosciWyslaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiadomosciWyslaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiadomosciWyslaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
