import { numberedJson } from './imageConverter.js';

let imagepath = []
export default function imageLocator(postno) {
    
    for (let j = 0; j < Object.values(numberedJson)[postno-1].length && j <= 4; j++) {
        //console.log(Object.values(numberedJson)[postno-1].length);
        imagepath[j] = `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${postno}/image${j}.jpg`
        //console.log(imagepath);
    }
    return imagepath
  
}

//imageLocator(3)