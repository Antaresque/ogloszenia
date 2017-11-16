import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriaComponent } from './kategoria.component';

describe('KategoriaComponent', () => {
  let component: KategoriaComponent;
  let fixture: ComponentFixture<KategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
