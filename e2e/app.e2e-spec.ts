import { C01BasicPage } from './app.po';

describe('c01-basic App', () => {
  let page: C01BasicPage;

  beforeEach(() => {
    page = new C01BasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
