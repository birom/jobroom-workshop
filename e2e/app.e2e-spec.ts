import { JobroomWorkshopPage } from './app.po';

describe('jobroom-workshop App', () => {
  let page: JobroomWorkshopPage;

  beforeEach(() => {
    page = new JobroomWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
