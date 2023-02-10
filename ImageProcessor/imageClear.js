import fs from "fs";
import { jsonlength } from "./imageConverter.js";

function imageclear() {
  for (let i = 1; i <= jsonlength; i++) {
    for (let j = 0; j <= 4 /*Object.values(numberedJson)[i-1].length*/; j++) {
      fs.stat(
        `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg`,
        function (err, stats) {
          //console.log(stats);
          //here we got all information of file in stats variable
          if (err) {
            return console.error(err);
          }

          fs.unlink(
            `E:/Website Design/InstagramBOT/New-InstaBOT/images/post${i}/image${j}.jpg`,
            function (err) {
              if (err) return console.log(err);
              console.log("file deleted successfully");
            }
          );
        }
      );
    }
  }
}

//imageclear();
export default imageclear
