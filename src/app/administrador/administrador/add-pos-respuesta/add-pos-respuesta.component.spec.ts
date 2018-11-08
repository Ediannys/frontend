import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosRespuestaComponent } from './add-pos-respuesta.component';

describe('AddPosRespuestaComponent', () => {
  let component: AddPosRespuestaComponent;
  let fixture: ComponentFixture<AddPosRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPosRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
