import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoComponent } from './logotipo.component';

describe('LogotipoComponent', () => {
  let component: LogotipoComponent;
  let fixture: ComponentFixture<LogotipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
