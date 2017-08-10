import { LamboPage } from './app.po';

describe('lambo App', () => {
  let page: LamboPage;

  beforeEach(() => {
    page = new LamboPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
