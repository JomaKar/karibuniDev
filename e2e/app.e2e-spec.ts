import { KaribuniPage } from './app.po';

describe('karibuni App', function() {
  let page: KaribuniPage;

  beforeEach(() => {
    page = new KaribuniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
