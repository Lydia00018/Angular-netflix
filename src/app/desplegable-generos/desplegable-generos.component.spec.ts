import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegableGenerosComponent } from './desplegable-generos.component';

describe('DesplegableGenerosComponent', () => {
  let component: DesplegableGenerosComponent;
  let fixture: ComponentFixture<DesplegableGenerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesplegableGenerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesplegableGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
