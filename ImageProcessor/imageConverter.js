import download from "image-downloader"; //npm package for converting images urls to disk saved images

import images from "../json/ArtData.json" assert { type: "json" };
//importing json gives warning since its a new feature in js
import fs from 'fs';
//console.log(images.imageLinks);

//!Converting json to a readable format
const imageLinks = [];
let numberedJson = {};
let count = 1;

Object.values(images).forEach(item => {
    imageLinks.push(item.imageLinks);
});

for (let key in imageLinks) {
  numberedJson[count] = imageLinks[key];
  count++;
}

//console.log(numberedJson);

let jsonlength = Object.keys(numberedJson).length;
//let postlength = images.array.length
//console.log(jsonlength)

function imageConverter() {
  for (let i = 1; i <= jsonlength; i++) {
    for (let j = 0; j <= Object.values(numberedJson)[i-1].length && j <= 4; j++) {

      const url = Object.values(numberedJson)[i-1][j];
      if (!url) {
        console.error(`URL not found for post${i} and image${j}`);
        continue;
      }

      const options = {
        url: url,
        dest: `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg`,
        // TODO Replace this path and make sure u create 5 folders named post1-post2
      };

      download.image(options)
        .then(({ filename }) => {
          console.log("Saved to", filename); // saved to /path/to/dest/image.jpg
        })
        .catch((err) => console.error(err));
    }
  }
}

function imageclear() {
  for (let i = 1; i <= jsonlength; i++) {
    for (let j = 0; j <= 4/*Object.values(numberedJson)[i-1].length*/; j++) {
      
      fs.stat(`E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg` , function (err, stats) {
        //console.log(stats); 
        //here we got all information of file in stats variable     
        if (err) {
            return console.error(err);
        }
     
        fs.unlink(`E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg` ,function(err){
             if(err) return console.log(err);
             console.log('file deleted successfully');
        });  
     });
      
    }
  }
}

//imageConverter()
//imageclear()
export {imageConverter, imageclear, numberedJson}
