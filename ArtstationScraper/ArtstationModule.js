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

    await page.goto('https://www.artstation.com/channels/cover_art?sort_by=trending&dimension=all'); // Change the link according to the content u need
        
    const artistData = {};
    //! Start of loop
    for(let i = 1; i <= noOfElements; i ++){
        const selector = 'projects-list-item'
        await page.waitForSelector(selector)
        const artTag = await page.$(`projects-list-item:nth-child(${i})`)
        await artTag.click()        
        console.log(`Went through ${i} element `);
        await page.waitForSelector('project-asset') // Changed from picture.d-block to project-asset since picture.d-block may not be present

        const imageDetails = await page.evaluate(() => {
        //!Start of evaluate
        const titleElement = document.querySelector('h1');
        const artistNameElement = document.querySelector('h3.project-author-name >a');
        const tagsElement = document.querySelectorAll('ul.project-tags > li');
        const imgElement = document.querySelector('picture.d-block'); //Make sue u dont use it to extract data since it is not querySelectorAll
        console.log(imgElement)

        //Checking if there is images or not if not it returns nothing
        if (imgElement == null){
            //? --i
            // ?console.log(`This ${i} Post does'nt have any images going back....`)
            //The code is not logging "This ${i} Post does'nt have any images going back...." 
            //because the code is executing in the context of the page and returning control back to the Node.js environment. 
            //The code execution in the page context is isolated and cannot affect the state of the Node.js environment.
            return { status: 'noImage'}
        }

        const title = titleElement.innerText;
        const artistName = artistNameElement.innerText;
        let tags;
        if (document.querySelector('ul.project-tags > li') == null) { 
            // Check if tag element is empty since many post does'nt have any tags and assign "noTags"
            tags = "#noTags"
        }
        else{            
            tags = Array.from(tagsElement).map(tag => tag.innerText);
        }

        const imageLinks = Array.from(document.querySelectorAll('picture.d-block'))
            .map(asset => asset.querySelector('img').getAttribute('src'));
        
        return { title, artistName, tags, imageLinks };
        //!End of evaluate
        });

        if(imageDetails.status === 'noImage') {
            console.log(`This ${i}th post does'nt have any images going back....`)
            ++noOfElements
        }
        //Checking if the imageDetails contains anything or not
        else if(imageDetails){
            artistData[i] = imageDetails;
            console.log(`image = ${imageDetails}`)
            console.log("collected images");           
        }
        await page.goBack(); // Using await solved a closed browser error
        //? await page.screenshot({ path: `./screenshot/ex${i}.png`, fullPage: true })
    }
    //!End of loop
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
