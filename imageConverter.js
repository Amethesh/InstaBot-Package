import download from "image-downloader";//npm package for converting images urls to disk saved images
import images from "./images.json" assert { type: "json" }; //importing json gives warning since its a new feature in js
import fs from 'fs';

let jsonlength = Object.keys(images).length;
//let postlength = images.array.length

function imageConverter() {
  for (let i = 1; i <= jsonlength; i++) {
    for (let j = 0; j <= Object.values(images)[i-1].length; j++) {

      const options = {
        url: images[i][j],
        dest: `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg`,
        //Replace this path and make sure u create 5 folders named post1-post2
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
    for (let j = 0; j <= Object.values(images)[i-1].length; j++) {
      
      fs.stat(`E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg` , function (err, stats) {
        //console.log(stats); //here we got all information of file in stats variable
     
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
imageclear()
//console.log(test);
