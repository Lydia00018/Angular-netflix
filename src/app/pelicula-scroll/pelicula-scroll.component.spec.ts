import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaScrollComponent } from './pelicula-scroll.component';

describe('PeliculaScrollComponent', () => {
  let component: PeliculaScrollComponent;
  let fixture: ComponentFixture<PeliculaScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
