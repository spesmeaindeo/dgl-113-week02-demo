import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("Free plan", async () => {
    await page.click('#freebutton');

    await page.waitForSelector('#planname');
    let element = await page.$('#planname');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("Free");

    await page.waitForSelector('#monthlyrate');
    element = await page.$('#monthlyrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$0/mo");

    await page.waitForSelector('#annualrate');
    element = await page.$('#annualrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$0/yr");

    let nextYear = new Date();
    nextYear.setFullYear( nextYear.getFullYear() + 1 );
    await page.waitForSelector('#gooduntil');
    element = await page.$('#gooduntil');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual(nextYear.toDateString());
  });

  it("Pro plan", async () => {
    await page.click('#probutton');

    await page.waitForSelector('#planname');
    let element = await page.$('#planname');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("Pro");

    await page.waitForSelector('#monthlyrate');
    element = await page.$('#monthlyrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$15/mo");

    await page.waitForSelector('#annualrate');
    element = await page.$('#annualrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$180/yr");

    let nextYear = new Date();
    nextYear.setFullYear( nextYear.getFullYear() + 1 );
    await page.waitForSelector('#gooduntil');
    element = await page.$('#gooduntil');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual(nextYear.toDateString());
  });

  it("Free plan", async () => {
    await page.click('#enterprisebutton');

    await page.waitForSelector('#planname');
    let element = await page.$('#planname');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("Enterprise");

    await page.waitForSelector('#monthlyrate');
    element = await page.$('#monthlyrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$29/mo");

    await page.waitForSelector('#annualrate');
    element = await page.$('#annualrate');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual("$348/yr");

    let nextYear = new Date();
    nextYear.setFullYear( nextYear.getFullYear() + 1 );
    await page.waitForSelector('#gooduntil');
    element = await page.$('#gooduntil');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual(nextYear.toDateString());
  });
});
