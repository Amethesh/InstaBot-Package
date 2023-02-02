import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(stealthPlugin())

async function takeShot() {
    const browser = await puppeteer.launch({
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        headless: true 
    });

    const page = await browser.newPage();

    await page.goto('https://www.lightnovelpub.com/hub_29121336');
    // await page.waitForNavigation()
    await page.waitForSelector('.head-content')

    await page.screenshot({
        path: 'testpic.png'
    })

    await browser.close()
}

takeShot()