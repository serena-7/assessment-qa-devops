import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Draw Button displays div choices", async () => {
  await driver.findElement(By.id("draw")).click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = choices.isDisplayed();
  expect(displayed).toBeTruthy();
});

test("Add to Duo button displays div player-duo", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.findElement(By.className("bot-btn")).click();
  const duo = await driver.findElement(By.id("player-duo"));
  const displayed = duo.isDisplayed();
  expect(displayed).toBeTruthy();
});
