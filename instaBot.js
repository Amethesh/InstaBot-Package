import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import images from "./images.json" assert { type: "json" };
import * as dotenv from 'dotenv'
dotenv.config()

puppeteer.use(stealthPlugin())

let imagepath = []

const instaBot = async () => {
    const browser = await puppeteer.launch({ 
        executablePath: process.env.CHROME_PATH,
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/')

    await page.waitForSelector('input[name=username]');

    await page.type('input[name=username]', process.env.INSTA_USERNAME)
    await page.type('input[name=password]', process.env.INSTA_PASSWORD)

    await page.click('button[type=submit]')

    //clicks needed to get to home page
    await page.waitForSelector('._ac8f button[type=button]');
    await page.click('._ac8f button[type=button]')

    await page.waitForSelector('._a9-z ._a9--._a9_1')
    await page.click('._a9-z ._a9--._a9_1')

    
    //for uploading images
    await page.waitForSelector('.xh8yej3.x1iyjqo2')
    await page.click('.xh8yej3.x1iyjqo2 div:nth-child(7)')
    console.log("clicked add post")

    // opening the file chooser
    await page.waitForSelector('._ab8w ._ab94._ab99._ab9f._ab9m._ab9p._ab9x._aba7._abcm')
    console.log('Waited and got the DOM')

    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('._ab8w ._ab94._ab99._ab9f._ab9m._ab9p._ab9x._aba7._abcm')
    ]) 
    console.log('got file chooser')
    
    imageConverter(1) //calling function to store the paths of images

    await fileChooser.accept(imagepath)
    console.log('Files accepted')

    await page.waitForSelector('._ab8w._ab94._ab99._ab9f._ab9m._ab9p._ab9-._abaa._abcm')
    await page.click('._ab8w._ab94._ab99._ab9f._ab9m._ab9p._ab9-._abaa._abcm')

    await page.waitForTimeout(1000)
    await page.click('._ab8w._ab94._ab99._ab9f._ab9m._ab9p._ab9-._abaa._abcm')

    // await page.waitForSelector('.xw2csxc.x1odjw0f.x1n2onr6.x1hnll1o.xpqswwc.x5dp1im.xl565be.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1w2wdq1.xen30ot.x1swvt13.x1pi30zi.xh8yej3.x5n08af.notranslate[role=textbox]')
    await page.waitForSelector('[aria-label="Write a caption..."]')
    console.log('Found and waited for caption dom')
    //await page.screenshot({ path: 'caption_prob' })
    await page.type('[aria-label="Write a caption..."]', 'Posted using bot: Testing filepath function 1')
    await page.screenshot({ path: `caption.png`, fullPage: true })
    
    await page.waitForTimeout(1000)
    await page.click('._ab8w._ab94._ab99._ab9f._ab9m._ab9p._ab9-._abaa._abcm')
    await page.waitForSelector('img[alt="Animated checkmark"]')
    await browser.close()
    console.log("posted 👍")
}

let jsonlength = Object.keys(images).length;

function imageConverter(postno) {
    
      for (let j = 0; j < Object.values(images)[postno-1].length && j <= 4; j++) {
        imagepath[j] = `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${postno}/image${j}.jpg`
        console.log(Object.values(images)[postno-1].length);
      }
    
}

instaBot()
//imageConverter(1) //calling function to store the paths of images



console.log(imagepath);