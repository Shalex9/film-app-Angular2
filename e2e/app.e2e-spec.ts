import { ProjectFilmPage } from './app.po';

describe('project-film App', () => {
  let page: ProjectFilmPage;

  beforeEach(() => {
    page = new ProjectFilmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
