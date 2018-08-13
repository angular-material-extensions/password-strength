import { ExamplesModule } from './examples.module';

describe('ExamplesModule', () => {
  let exampleModule: ExamplesModule;

  beforeEach(() => {
    exampleModule = new ExamplesModule();
  });

  it('should create an instance', () => {
    expect(exampleModule).toBeTruthy();
  });
});
