const { Builder } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

async function openWebsite(url) {
  try {
    await driver.get(url);
    console.log('Website opened successfully!');
  } catch (error) {
    console.error('Failed to open website:', error);
  } finally {
    await driver.quit();
  }
}

openWebsite('https://www.example.com');
