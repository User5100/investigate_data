import { BDSChallengePage } from './app.po';

describe('bdschallenge App', () => {
  let page: BDSChallengePage;

  beforeEach(() => {
    page = new BDSChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
