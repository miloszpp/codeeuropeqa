import { CodeeuropeqaPage } from './app.po';

describe('codeeuropeqa App', () => {
  let page: CodeeuropeqaPage;

  beforeEach(() => {
    page = new CodeeuropeqaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
