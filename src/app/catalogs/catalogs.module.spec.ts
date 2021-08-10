import { CatalogsModule } from './catalogs.module';

describe('CatalogsModule', () => {
  let catalogsModule: CatalogsModule;

  beforeEach(() => {
    catalogsModule = new CatalogsModule();
  });

  it('should create an instance', () => {
    expect(catalogsModule).toBeTruthy();
  });
});
