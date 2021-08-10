import {SecurityItemsModule} from './security-items.module';

describe('SecurityItemsModule', () => {
  let securityItemsModule: SecurityItemsModule;

  beforeEach(() => {
    securityItemsModule = new SecurityItemsModule();
  });

  it('should create an instance', () => {
    expect(securityItemsModule).toBeTruthy();
  });
});
