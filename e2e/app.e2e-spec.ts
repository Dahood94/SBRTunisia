import { PfePage } from './app.po';

describe('pfe App', function() {
  let page: PfePage;

  beforeEach(() => {
    page = new PfePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
