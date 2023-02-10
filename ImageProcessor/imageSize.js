import sizeOf from "image-size";
import imageLocator from "./imageLocator.js";
import promise from "promise"

export default function imageSize(postno) {
  // To resolve promises since it was throwing some error
  return new promise((resolve, reject) => {
    let mywidth = 100; // for testing
    let myheight = 101; // for testing
    let ratio;
    let set = 0;
    const imagepath = imageLocator(postno); //Image path make sure it exist
    //Since instagram fix all the image size based on the first image we only check the first image
    sizeOf(imagepath[0], function (err, dimensions) {
      if (err) {
        reject(err);
      }
      mywidth = dimensions.width;
      myheight = dimensions.height;
      ratio = mywidth / myheight;
      console.log(dimensions.width, dimensions.height);
      //console.log(ratio)

      // Selecting the image size accoding to its aspect ratio 1.77 means it is landscape 
      if (myheight > mywidth) {
        console.log("portrait");
        resolve(5);
      } else if (myheight == mywidth) {
        console.log("Square");
        resolve(3);
      } else if (ratio > 1 && ratio < 1.77) {
        console.log("Slightly Square");
        resolve(1);
      } else if (ratio >= 1.77) {
        console.log("Landscape");
        resolve(7);
      } else {
        console.log("Not sure: Fixing square");
        resolve(3);
      }
      //return set
    });
  });
  //console.log("set")
}

// imageSize(1)
//   .then((size) => {
//     console.log(`Set size is ${size}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
