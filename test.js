// import puppeteer from 'puppeteer-extra';
// import stealthPlugin from 'puppeteer-extra-plugin-stealth'

// puppeteer.use(stealthPlugin())

// async function takeShot() {
//     const browser = await puppeteer.launch({
//         executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
//         headless: true 
//     });

//     const page = await browser.newPage();

//     await page.goto('https://www.lightnovelpub.com/hub_29121336');
//     // await page.waitForNavigation()
//     await page.waitForSelector('.head-content')

//     await page.screenshot({
//         path: 'testpic.png'
//     })

//     await browser.close()
// }

// takeShot()

//////////////////////////////////TEST-2///////////////////////////////////////////////////

// ? let images 
// ? fs.readFile('./images.json', (err, data) => {
  // ?   if (err) throw err;
  
  // ?   images = JSON.parse(data);
  
  // ? });
  
  // ? console.log(images);
  
  // ! does'nt work due to fs.readFile being async function😒😒
  
  
  // function readJSONFile(filePath, callback) {
    
    //     fs.readFile(filePath, (err, data) => {
      //       if (err) return callback(err);
      
      //       try {
        //         let json = JSON.parse(data);
        //         console.log(json)
        //         return json
        //       } catch (error) {
          //         callback(error);
          //       }
          //     });
          // }
          
          // const images = readJSONFile('images.json');
          
// console.log(images)

import getData from "./ArtstationModule.js";
import fs from 'fs';

getData(5)
  .then(data => {
    // Do something with the data here
    console.log(data)
    fs.writeFile('ArtData.json', JSON.stringify(data), (err) => {
      if(err)
      console.log('Unable to write');
    })
    
  })
  .catch(error => {
    console.error(error);
  });
