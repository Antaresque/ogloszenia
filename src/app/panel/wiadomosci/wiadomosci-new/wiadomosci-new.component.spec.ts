import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiadomosciNewComponent } from './wiadomosci-new.component';

describe('WiadomosciNewComponent', () => {
  let component: WiadomosciNewComponent;
  let fixture: ComponentFixture<WiadomosciNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiadomosciNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiadomosciNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
