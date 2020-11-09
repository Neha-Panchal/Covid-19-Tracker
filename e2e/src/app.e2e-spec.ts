import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';


describe('Covid-19 Tracker Application', ()=> {
  
  beforeEach(() => {
    browser.get('http://localhost:4200/');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

it('should allow me to click the Confirmed radio button', () =>{
  var confirmed = element(by.xpath(("//label[contains(text(),'Confirmed')]")));
  confirmed.click();
  browser.sleep(2000);
});

it('should allow me to click the Deaths radio button', () =>{
  var deaths = element(by.xpath(("//label[contains(text(),'Deaths')]")));
  deaths.click();
  browser.sleep(2000);
});

it('should allow me to click the Recovered radio button', () =>{
  var recovered = element(by.xpath(("//label[contains(text(),'Recovered')]")));
  recovered.click();
  browser.sleep(2000);
});

it('should allow me to click the Active radio button', () =>{
  var active = element(by.xpath(("//label[contains(text(),'Active')]")));
  active.click();
  browser.sleep(2000);
});

});

