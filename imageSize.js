import sizeOf from "image-size"
import imageLocator from "./imageLocator.js";

export default function imageSize(postno){
    
    const imagepath = imageLocator(postno)
    sizeOf(imagepath[0], function (err, dimensions) {
        console.log(dimensions.width, dimensions.height);
    });

}
imageSize(2)