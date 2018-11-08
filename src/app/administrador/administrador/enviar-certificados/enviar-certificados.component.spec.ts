import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCertificadosComponent } from './enviar-certificados.component';

describe('EnviarCertificadosComponent', () => {
  let component: EnviarCertificadosComponent;
  let fixture: ComponentFixture<EnviarCertificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarCertificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
