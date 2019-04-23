import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { LoginComponent } from 'src/app/login/login.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('Verify that i can go to login component', () =>{
    browser.get('home/login');
    let loginText = element(by.id('login')).getText();
    expect(loginText).toEqual("login");
  })*/

  it('Verify that the landing page after login is display-quizzes', () =>{
    browser.get('home/login');
    element(by.id('login')).sendKeys('loginTest'); 
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/portal/display-quizzes');
  })

  it('Verify that i can create a new quiz', () =>{
    //browser.sleep(5000);  
    browser.get('portal/display-quizzes');
    var cardsBefore = +element.all(by.css('.example-card')).count();
    browser.get('portal/create-quiz');
    browser.sleep(500); 
    element(by.id('panelHeader')).click();
    browser.sleep(500); 
    element(by.id('quizTitle')).sendKeys('Quiz title');
    browser.sleep(500);  
    element(by.id('questionTitle')).sendKeys('Question title'); 
    browser.sleep(500);  
    element(by.id('optionAnswer1')).sendKeys('option answer 1'); 
    browser.sleep(500);  
    element(by.id('optionCorrect1')).sendKeys('Correct'); 
    browser.sleep(500);  
    element(by.id('optionAnswer2')).sendKeys('Option answer 2'); 
    browser.sleep(500);  
    element(by.id('optionCorrect2')).sendKeys('Correct'); 
    browser.sleep(500);  
    element(by.id('optionAnswer3')).sendKeys('Option answer 3'); 
    element(by.id('optionCorrect3')).sendKeys('False');
    browser.sleep(1000); 
    element(by.id('submitQuiz')).click();
    browser.sleep(1000);
    var cardsAfter = +element.all(by.css('.example-card')).count();

    expect(cardsBefore+1 == cardsAfter);
  })

  it('Verify that i can delete a quiz', () =>{
    //browser.sleep(5000); 
    //in case there is no existing quizzes, we create a quiz that can be deleted
    browser.get('portal/display-quizzes');
    var cardsBefore = +element.all(by.css('.example-card')).count();
    //if(cardsBefore == 0){
      browser.get('portal/create-quiz');
      browser.sleep(500); 
      element(by.id('panelHeader')).click();
      browser.sleep(500); 
      element(by.id('quizTitle')).sendKeys('Quiz title');
      browser.sleep(500);  
      element(by.id('questionTitle')).sendKeys('Question title'); 
      browser.sleep(500);  
      element(by.id('optionAnswer1')).sendKeys('option answer 1'); 
      browser.sleep(500);  
      element(by.id('optionCorrect1')).sendKeys('Correct'); 
      browser.sleep(500);  
      element(by.id('optionAnswer2')).sendKeys('Option answer 2'); 
      browser.sleep(500);  
      element(by.id('optionCorrect2')).sendKeys('Correct'); 
      browser.sleep(500);  
      element(by.id('optionAnswer3')).sendKeys('Option answer 3'); 
      element(by.id('optionCorrect3')).sendKeys('False');
      browser.sleep(1000); 
      element(by.id('submitQuiz')).click();
      browser.sleep(1000);
    //}
    var cardsBefore = +element.all(by.css('.example-card')).count();
    element(by.id('deleteQuiz')).click();
    var cardsAfter = +element.all(by.css('.example-card')).count();

    expect(cardsBefore == cardsAfter+1);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
