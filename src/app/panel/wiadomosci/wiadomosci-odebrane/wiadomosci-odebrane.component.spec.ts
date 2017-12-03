import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiadomosciOdebraneComponent } from './wiadomosci-odebrane.component';

describe('WiadomosciOdebraneComponent', () => {
  let component: WiadomosciOdebraneComponent;
  let fixture: ComponentFixture<WiadomosciOdebraneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiadomosciOdebraneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiadomosciOdebraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
