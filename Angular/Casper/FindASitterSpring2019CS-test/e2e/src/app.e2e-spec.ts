import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // 1.0: Verify that i can go to the login component
  // 2.0: Login by filling out username and password, and verify we go to the landing page after login.
  // 3.0: Create a new quiz, and check if the display-quizzes page has updated with the quizz.

  it('1.0: Verify that i can go to the login component', () => {
    browser.get('home/login');
    let loginText = element(by.id('login')).getText();
    expect(loginText).toEqual("Login");
  })

  it('2.0: Login by filling out username and password, and verify we go to the landing page after login.', () => {
    browser.get('home/login');
    element(by.id('username')).sendKeys('Patrick');
    element(by.id('password')).sendKeys('Patrick69');
    element(by.id('loginButton')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4201/portal/display-quizzes');
  })

  it('3.0: Create a new quiz, add an option, and check if the display-quizzes page has updated with the quizz.', () => {

    var quizzesBefore = element.all(by.css('.example-card')).count();
    browser.get('home/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');
    element(by.id('loginButton')).click();
    element(by.id('newQuizBtn')).click()
    element(by.id('quiztitle')).sendKeys('TestQuiz 1');
    element(by.id('newQuestion')).click();
    element.all(by.css('.question')).get(0).sendKeys('Test Question 1');
    element.all(by.css('.option')).get(0).sendKeys('Test Option 1.1');
    element.all(by.css('.option')).get(1).sendKeys('Test Option 1.2 ');
    element(by.id('newOption')).click();
    element.all(by.css('.option')).get(2).sendKeys('Test Option 1.3');
    element(by.id('newQuestion')).click();
    element.all(by.css('.question')).get(1).sendKeys('Test Question 2');
    element.all(by.css('.option')).get(3).sendKeys('Test Option 2.1');
    element.all(by.css('.option')).get(4).sendKeys('Test Option 2.2');
    element(by.id('saveQuiz')).click();
    var quizzesAfter = element.all(by.css('.example-card')).count();
    browser.sleep(1000);
    expect(quizzesBefore < quizzesAfter);
    browser.sleep(1000);

    });

  it('4.0: Enter form for registering, fill out the form with valid inputs, return to login.', () => {
    browser.get('home/login');
    element(by.id('registerBtn')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4201/home/create-user');
    element(by.id('username')).sendKeys('TEST12')
    element(by.id('password')).sendKeys('TEST12')
    element(by.id('email')).sendKeys('TEST12@TEST12.dk')
    element(by.id('birthDate')).sendKeys('12/12/1999')
    element(by.id('addPhoneNumber')).click()
    element(by.id('phonenumber')).sendKeys('12345678')
    
    element(by.id('saveUser')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4201/home/login')
    

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
