import { GPlacePage } from './app.po';

describe('gplace App', () => {
  let page: GPlacePage;

  beforeEach(() => {
    page = new GPlacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
