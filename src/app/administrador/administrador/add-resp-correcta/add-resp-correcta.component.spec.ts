import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRespCorrectaComponent } from './add-resp-correcta.component';

describe('AddRespCorrectaComponent', () => {
  let component: AddRespCorrectaComponent;
  let fixture: ComponentFixture<AddRespCorrectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRespCorrectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRespCorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
