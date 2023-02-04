import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth'
import fs from 'fs';
//const download = require('image-downloader'); //produces ES error
import download from 'image-downloader' //npm package for converting images urls to disk saved images

import * as dotenv from 'dotenv'
dotenv.config()


puppeteer.use(stealthPlugin())

//Parameters for saving the images links to disk images 
// const options = {
//     url: 'http://someurl.com/image.jpg',
//     dest: `./images/post${i}.jpg`,               // will be saved to /path/to/dest/image.jpg
//   }

async function getData(noOfElements) {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: true 
    });
    const page = await browser.newPage();

    await page.goto('https://www.artstation.com/?sort_by=trending');
    
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
        //await page.screenshot({ path: `./images/ex${i}.png`, fullPage: true })
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