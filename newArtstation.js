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

    await page.goto('https://www.artstation.com/?sort_by=trending&dimension=all');
        
    const artistData = [];

    for(let i = 1; i <= noOfElements; i ++){
        const selector = 'projects-list-item'
        await page.waitForSelector(selector)
        const artTag = await page.$(`projects-list-item:nth-child(${i})`)
        await artTag.click()
        
        console.log(`Went through ${i} element `);
        await page.waitForSelector('picture.d-block')            
        const imageDetails = await page.evaluate(() => {

        const titleElement = document.querySelector('h1');
        const artistNameElement = document.querySelector('h3.project-author-name >a');
        const tagsElement = document.querySelectorAll('ul.project-tags');

        if (!titleElement || !artistNameElement || !tagsElement) {
            return {};
        }

        const title = titleElement.innerText;
        const artistName = artistNameElement.innerText;
        const tags = Array.from(tagsElement).map(tag => tag.innerText);
        const imageLinks = Array.from(document.querySelectorAll('picture.d-block'))
            .map(asset => asset.querySelector('img').getAttribute('src'));

        return { title, artistName, tags, imageLinks };
        });

        //artistData.push(imageDetails);
        artistData[i] = imageDetails;
        console.log("collected images");                  
        //artistData[`${i}`] = artistData;            
        await page.goBack(); //? using await solved a closed browser error
        // await page.screenshot({ path: `./screenshot/ex${i}.png`, fullPage: true })
    }
    console.log(artistData) 
    await browser.close();
    return artistData;
} 

const imagesJSON = await getData(5);
console.log(imagesJSON)
fs.writeFile('ArtData.json', JSON.stringify(imagesJSON), (err) => {
    if(err)
    console.log('Unable to write');
})
