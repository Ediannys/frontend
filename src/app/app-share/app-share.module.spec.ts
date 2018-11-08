import { AppShareModule } from './app-share.module';

describe('AppShareModule', () => {
  let appShareModule: AppShareModule;

  beforeEach(() => {
    appShareModule = new AppShareModule();
  });

  it('should create an instance', () => {
    expect(appShareModule).toBeTruthy();
  });
});
