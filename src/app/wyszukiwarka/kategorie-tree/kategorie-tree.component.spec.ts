import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieTreeComponent } from './kategorie-tree.component';

describe('KategorieTreeComponent', () => {
  let component: KategorieTreeComponent;
  let fixture: ComponentFixture<KategorieTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorieTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
