import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth'
import fs from 'fs';

import * as dotenv from 'dotenv'
dotenv.config()


puppeteer.use(stealthPlugin())

async function getData(noOfElements) {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: false 
    });
    const page = await browser.newPage();

    await page.goto('https://www.artstation.com/channels/automotive?sort_by=trending&dimension=all');
    
    const artistImage = {};
    

    for(let i = 1; i <= noOfElements; i ++){
        const selector = 'projects-list-item'
        await page.waitForSelector(selector)
        const artTag = await page.$(`projects-list-item:nth-child(${i})`)
        await artTag.click()
        
        console.log(`Went through ${i} element `);
        await page.waitForSelector('picture.d-block')
        const imageLinks = await page.evaluate(() => {
            const assets = Array.from(document.querySelectorAll('picture.d-block:nth-child(-n+5)'))
            return assets.map(asset => asset.querySelector('img').getAttribute('src'))
            // return assets.map(asset => asset.getAttribute('src'))
        })
        console.log("collected images");
 
        console.log(imageLinks)
        artistImage[`${i}`] = imageLinks;

        page.goBack()
        await page.screenshot({ path: `./screenshot/ex${i}.png`, fullPage: true })
    }
    
    // console.log(artistImage);

    
    await browser.close();
    return artistImage;
} 

const imagesJSON = await getData(5);
console.log(imagesJSON)
fs.writeFile('images.json', JSON.stringify(imagesJSON), (err) => {
    if(err)
        console.log('Unable to write');
})