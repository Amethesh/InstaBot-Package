import puppeteer from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth'
import fs from 'fs';

import * as dotenv from 'dotenv'
dotenv.config()


puppeteer.use(stealthPlugin())

/*export default */async function getData(noOfElements) {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: false 
    });
    const page = await browser.newPage();

    await page.goto('https://www.artstation.com/channels/architectural_visualization?sort_by=trending&dimension=all'); // Change the link according to the content u need
        
    const artistData = {};
    let j = 1;
    for(let i = 1; i <= noOfElements; i ++){

    const selector = 'projects-list-item'
    await page.waitForSelector(selector)
    const artTag = await page.$(`projects-list-item:nth-child(${i})`)
    await artTag.click()
    
    console.log(`Went through ${i} element `);
    await page.waitForSelector('project-asset')            
    const imageDetails = await page.evaluate(() => {

    const titleElement = document.querySelector('h1');
    const artistNameElement = document.querySelector('h3.project-author-name >a');
    const tagsElement = document.querySelector('ul.project-tags > li');
    const imgElement = document.querySelector(' picture.d-block');
    
    if (imgElement == null) { // Check if imageLinks is undefined or empty
        --i
        console.log(`This ${i} Post does'nt have any images going back....`)
        return
    }
    
    const title = titleElement.innerText;
    const artistName = artistNameElement.innerText;
    const tags = Array.from(tagsElement).map(tag => tag.innerText);
    const imageLinks = Array.from(document.querySelectorAll(' picture.d-block'))
        .map(asset => asset.querySelector('img').getAttribute('src'));
    
    return { title, artistName, tags, imageLinks };
    });

   

    artistData[j] = imageDetails;
    j++; // Increment the counter only if imageLinks is not empty or undefined
    console.log("collected images");           
    await page.goBack(); // Using await solved a closed browser error
    //? await page.screenshot({ path: `./screenshot/ex${i}.png`, fullPage: true })

    }
    //?console.log(artistData) 
    await browser.close();
    return artistData;
} 


//! For test purposes
// const dataJSON = await getData(5); //Call of the puppeteer function
// console.log(dataJSON)
// fs.writeFile('ArtData.json', JSON.stringify(dataJSON), (err) => {
//     if(err)
//     console.log('Unable to write');
// })

export default getData
