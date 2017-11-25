import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKategorieComponent } from './home-kategorie.component';

describe('HomeKategorieComponent', () => {
  let component: HomeKategorieComponent;
  let fixture: ComponentFixture<HomeKategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
