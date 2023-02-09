import fs from "fs"
import * as dotenv from 'dotenv';
dotenv.config()

//Use it for in Local file read 
let file = fs.readFileSync("json/cookies.json", 'utf8')
console.log(file)
if(!file){
    console.log("No cookies found....LOGINING YOU IN")
    
}
else{    
    let cookiesJson = JSON.parse(file);
}