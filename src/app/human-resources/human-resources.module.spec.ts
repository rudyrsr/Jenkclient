import { HumanResourcesModule } from './human-resources.module';

describe('HumanResourcesModule', () => {
  let humanResourcesModule: HumanResourcesModule;

  beforeEach(() => {
    humanResourcesModule = new HumanResourcesModule();
  });

  it('should create an instance', () => {
    expect(humanResourcesModule).toBeTruthy();
  });
});
