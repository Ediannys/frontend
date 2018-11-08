import { ProfesorModule } from './profesor.module';

describe('ProfesorModule', () => {
  let profesorModule: ProfesorModule;

  beforeEach(() => {
    profesorModule = new ProfesorModule();
  });

  it('should create an instance', () => {
    expect(profesorModule).toBeTruthy();
  });
});
