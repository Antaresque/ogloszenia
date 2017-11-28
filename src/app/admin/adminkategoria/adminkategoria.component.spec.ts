import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKategoriaComponent } from './adminkategoria.component';

describe('AdminKategoriaComponent', () => {
  let component: AdminKategoriaComponent;
  let fixture: ComponentFixture<AdminKategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
