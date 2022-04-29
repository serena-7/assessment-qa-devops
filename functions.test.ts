const { shuffleArray } = require("./utils");
const { Builder, Capabilities, By } = require("selenium-webdriver");

const { bots } = require("./data");

describe("shuffleArray should", () => {
  it("shuffled arr has length of arr passed in", () => {
    let shuffled = shuffleArray(bots);
    expect(shuffled.length === bots.length).toBeTruthy();
  });
  it("shuffle array contains items of original array", () => {
    let shuffled = shuffleArray(bots);
    let matches = bots.map((bot) => {
      return { botName: bot.name, match: false };
    });
    shuffled.forEach((shuffBot) => {
      matches.forEach((oriBot) => {
        if (shuffBot.name === oriBot.botName) {
          oriBot.match = true;
        }
      });
    });
    let allMatch = true;
    matches.forEach((bot) => {
      if (bot.match === false) {
        allMatch = false;
      }
    });
    expect(allMatch).toBeTruthy();
  });
});
