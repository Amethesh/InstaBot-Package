import instaBot from "./InstagramScraper/instaBot.js";
import { imageConverter } from "./ImageProcessor/imageConverter.js";
import imageclear from "./ImageProcessor/imageClear.js";
import getData from "./ArtstationScraper/ArtstationModule.js";
import fs from "fs"


function indexScraper (NoOfPost) {

    getData(NoOfPost)
    .then(data => {
        // Do something with the data here
        console.log(data)
        fs.writeFile("json/ArtData.json", JSON.stringify(data), (err) => {
            if(err)
            console.log('Unable to write');
            else{
                imageclear()
                imageConverter()
                instaLoop(NoOfPost)
            }
        })
        
    })
    .catch(error => {
        console.error(error);
    });

    async function instaLoop(loopNo) {
        
        for(let i=1; i<= loopNo; i++){
            await instaBot(i)
        }
    }

}

indexScraper(5)
