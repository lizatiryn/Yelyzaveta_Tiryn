const { Builder, By, until } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://opensource-demo.orangehrmlive.com/");
  await driver.manage().setTimeouts({ implicit: 60000 });

  //login
  await driver.findElement(By.name("username")).sendKeys("Admin");
  await driver.findElement(By.name("password")).sendKeys("admin123");
  await driver
    .findElement(
      By.className(
        "oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"
      )
    )
    .click();

  //add a new record
  await driver
    .wait(until.elementLocated(By.className("oxd-main-menu-item")))
    .click();
  await driver
    .wait(until.elementLocated(By.xpath("//li[contains(.,'Job ')]")))
    .click();
  await driver
    .wait(until.elementLocated(By.xpath("//a[contains(text(),'Pay Grades')]")))
    .click();
  await driver
    .wait(
      until.elementLocated(
        By.className("oxd-button oxd-button--medium oxd-button--secondary")
      )
    )
    .click();
  await driver
    .wait(until.elementLocated(By.xpath("//div[2]/input")))
    .sendKeys("RandomName");
  await driver
    .wait(until.elementLocated(By.xpath("//button[contains(.,'Save')]")))
    .click();
  await driver.sleep(3000);

  // select currency
  await driver
    .wait(
      until.elementLocated(
        By.xpath("//div[@id='app']/div/div[2]/div[2]/div[2]/div/div/div/button")
      )
    )
    .click();
  await driver
    .wait(until.elementLocated(By.className("oxd-select-text-input")))
    .click();
  await driver
    .wait(
      until.elementLocated(
        By.xpath('//div[@class="oxd-select-option" and contains(.,"UAH")]')
      )
    )
    .click();
  await driver
    .wait(until.elementLocated(By.xpath("//div[2]/div/div/div/div[2]/input")))
    .sendKeys("10000");
  await driver
    .wait(until.elementLocated(By.xpath("//div[2]/div/div[2]/input")))
    .sendKeys("20000");
  await driver
    .wait(until.elementLocated(By.xpath("(//button[@type='submit'])[2]")))
    .click();
  await driver.sleep(3000);

  // delete
  await driver
    .wait(until.elementLocated(By.className("oxd-icon bi-trash")))
    .click();
  await driver
    .wait(
      until.elementLocated(
        By.className(
          "oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"
        )
      )
    )
    .click();

  await driver
    .wait(
      until.elementLocated(
        By.className("oxd-button oxd-button--medium oxd-button--ghost")
      )
    )
    .click();
  await driver.sleep(3000);

  await driver
    .wait(
      until.elementLocated(
        By.xpath(
          '//div[@class="oxd-table-cell oxd-padding-cell" and contains(.,"RandomName")] / following-sibling::div/descendant::i[@class="oxd-icon bi-trash"]'
        )
      )
    )
    .click();
  await driver
    .wait(
      until.elementLocated(
        By.className(
          "oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"
        )
      )
    )
    .click();
  await driver.sleep(3000);

  driver.quit();
}

test();
