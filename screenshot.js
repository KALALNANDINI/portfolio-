const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 });
  await page.goto('file:///C:/Users/Owner/.gemini/antigravity/scratch/nandini-portfolio/cv.html');
  await page.screenshot({path: 'C:/Users/Owner/.gemini/antigravity/scratch/nandini-portfolio/debug-screenshot.png'});
  await browser.close();
})();
