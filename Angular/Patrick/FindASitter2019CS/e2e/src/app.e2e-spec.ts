import { AppPage } from './app.po';
import { browser, logging, element, by, Browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1.0: Verify that I can go to the login component
  // 1.1: ...

  /*it('1.0: Verify that I can go to the login component',   () => {
  browser.get('home/login')
  expect(browser.getCurrentUrl()).toContain('/portal/display-quizzes');
  });*/

  // 2.0 Test login by filling out username and password and verify that we go to portal after login
  it('2.0 Test login by filling out username and password and verify that we go to portal after login', () => {
    browser.get('home/login');
    element(by.id('username')).sendKeys('Test');
    element(by.id('password')).sendKeys('Test');
    /*element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');*/
    element(by.id('loginbtn')).click();
    //expect(browser.getCurrentUrl()).toContain('/portal/display-quizzes');
    /*expect(browser.getCurrentUrl()).toContain('/admin/admin-panel');*/
    element.all(by.css('.cards')).then((elemsAfter) => {
      let firstCount = elemsAfter.length;
      browser.sleep(2000);
      browser.get('portal/create-quiz');
      element(by.className('titleInput')).sendKeys("test");
      element(by.className('newQuestion')).click();
      element(by.className('newOption')).click();
      element(by.className('questionInput')).sendKeys("test");
      element(by.className('optionInput')).sendKeys("test");
      element(by.id('submitQuiz')).click();
      browser.sleep(1000);
      element.all(by.css('.cards')).then((elemsAfter) => {
        let lastCount = elemsAfter.length;
        expect(lastCount - firstCount).toBe(2);
      });
  });

  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
