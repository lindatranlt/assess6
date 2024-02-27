const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

describe("Draw button displays the div with id = 'choices'", () => {
  test("check draw button", async () =>{
    //navigate to local 8000
    await driver.get("http://localhost:8000");
    // press draw button
    await driver.findElement(By.id('draw')).click(); 
    //find id choices
    await driver.findElement(By.id('choices'));
  })
});

describe("clicking an “Add to Duo” button displays the div with id = 'player-duo'", () => {
  test("check add to duo button", async () =>{
    //navigate to local 8000
    await driver.get("http://localhost:8000");
    // press draw button
    await driver.findElement(By.id('draw')).click(); 
    // press add to duo
    await driver.findElement(By.className('bot-btn')).click(); 
    // find id player-duo
    await driver.findElement(By.id('player-duo'));
  })
});