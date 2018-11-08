import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarTransferenciaComponent } from './verificar-transferencia.component';

describe('VerificarTransferenciaComponent', () => {
  let component: VerificarTransferenciaComponent;
  let fixture: ComponentFixture<VerificarTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
