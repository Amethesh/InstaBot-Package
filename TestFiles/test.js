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
//! start of index.js
import getData from "../ArtstationScraper/ArtstationModule.js";
import { imageConverter,imageclear } from "./imageConverter.js";
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


//!Insta Bot test

// import puppeteer from 'puppeteer-extra';
// import stealthPlugin from 'puppeteer-extra-plugin-stealth';
// import images from "./images.json" assert { type: "json" };
// import cookies from "./cookies.json" assert { type: "json" };
// import fs from "fs";
// import * as dotenv from 'dotenv';
// dotenv.config()

// puppeteer.use(stealthPlugin())

// let imagepath = []

// const instaBot = async () => {
//     const browser = await puppeteer.launch({ 
//         executablePath: process.env.CHROME_PATH,
//         headless: false
//     })
//     const page = await browser.newPage()
//     await page.goto('https://www.instagram.com/')

//     await page.waitForTimeout(1000)
//     //await page.waitForSelector('input[name=username]');
    
//     // await page.type('input[name=username]', process.env.INSTA_USERNAME)
//     // await page.type('input[name=password]', process.env.INSTA_PASSWORD)

//     // await page.click('button[type=submit]')

//     //Load cookies
//     // let cookies
//     // fs.readFile("cookies.json", (err, data) => {
//     //     if(err) throw err;

//     //     cookies = JSON.parse(data);
//     // });
//     // let cookies
//     // fs.readFile("cookies.json", (err, data) => {
//     //     if(err) throw err;

//     //     cookies = JSON.parse(data);
//     // });
//     //const cookies = JSON.parse(cookiesString);
//     await page.setCookie(...cookies);

//     await page.reload({ waitUntil: 'networkidle0'})
    
//     //clicks needed to get to home page
//    // await page.waitForSelector('._ac8f button[type=button]');
//     //await page.click('._ac8f button[type=button]')

//     //Saving cookies
//     // const cookies = await page.cookies();
//     // //console.log(cookies)
//     // fs.writeFile("cookies.json", JSON.stringify(cookies), (err) => {
//     //     if(err)
//     //     console.log('Unable to write');
//     // });

//     await page.waitForSelector('._a9-z ._a9--._a9_1')
//     await page.click('._a9-z ._a9--._a9_1')

    
//     //for uploading images
//     await page.waitForSelector('.xh8yej3.x1iyjqo2')
//     await page.click('.xh8yej3.x1iyjqo2 div:nth-child(7)')
//     console.log("clicked add post")

//     // opening the file chooser
//     await page.waitForSelector('._ab8w ._ab94._ab99._ab9f._ab9m._ab9p._ab9x._aba7._abcm')
//     console.log('Waited and got the DOM')

//     const [fileChooser] = await Promise.all([
//         page.waitForFileChooser(),
//         page.click('._ab8w ._ab94._ab99._ab9f._ab9m._ab9p._ab9x._aba7._abcm')
//     ]) 
//     console.log('got file chooser')
    
//     imageConverter(1) //calling function to store the paths of images

//     await fileChooser.accept(imagepath)
//     console.log('Files accepted')

//     //Clicking Re-size
//     await page.waitForSelector('button._acan._acao._acas._aj1-')    
//     await page.click('div._abfo button._acan._acao._acas._aj1-')
//     //Clicking the Dropdown and setting it to original
//     await page.click('div._ac36._ac38 button._acan._acao._acas._aj1-:nth-child(1)')
//     console.log("Orignal size is set")

    
//     //await browser.close()
//     console.log("posted 👍")
// }

// function imageConverter(postno) {
    
//       for (let j = 0; j < Object.values(images)[postno-1].length && j <= 4; j++) {
//         imagepath[j] = `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${postno}/image${j}.jpg`
//         console.log(Object.values(images)[postno-1].length);
//       }
    
// }

// instaBot()
// //imageConverter(1) //calling function to store the paths of images



// console.log(imagepath);