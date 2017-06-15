import { ArtPage } from './app.po';

describe('art App', () => {
  let page: ArtPage;

  beforeEach(() => {
    page = new ArtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
