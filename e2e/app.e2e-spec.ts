import { SeChallengePayrollClientPage } from './app.po';

describe('se-challenge-payroll-client App', () => {
  let page: SeChallengePayrollClientPage;

  beforeEach(() => {
    page = new SeChallengePayrollClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
