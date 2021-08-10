import { SecurityIssuesModule } from './security-issues.module';

describe('SecurityIssuesModule', () => {
  let securityIssuesModule: SecurityIssuesModule;

  beforeEach(() => {
    securityIssuesModule = new SecurityIssuesModule();
  });

  it('should create an instance', () => {
    expect(securityIssuesModule).toBeTruthy();
  });
});
