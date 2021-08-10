import { ConstructionMachineryModule } from './construction-machinery.module';

describe('ConstructionMachineryModule', () => {
  let constructionMachineryModule: ConstructionMachineryModule;

  beforeEach(() => {
    constructionMachineryModule = new ConstructionMachineryModule();
  });

  it('should create an instance', () => {
    expect(constructionMachineryModule).toBeTruthy();
  });
});
