import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProfesorComponent } from './eliminar-profesor.component';

describe('EliminarProfesorComponent', () => {
  let component: EliminarProfesorComponent;
  let fixture: ComponentFixture<EliminarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
