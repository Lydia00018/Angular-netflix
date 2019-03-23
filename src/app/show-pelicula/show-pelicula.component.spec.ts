import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeliculaComponent } from './show-pelicula.component';

describe('ShowPeliculaComponent', () => {
  let component: ShowPeliculaComponent;
  let fixture: ComponentFixture<ShowPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
