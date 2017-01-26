import { Rr3wikiPage } from './app.po';

describe('rr3wiki App', function() {
  let page: Rr3wikiPage;

  beforeEach(() => {
    page = new Rr3wikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
