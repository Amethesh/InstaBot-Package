import fs from "fs"

//Use it for in Local file read 
let file = fs.readFileSync('cookies.json', 'utf8')

console.log(file)
if(!file){
    file = ""
    console.log(true)
}

let obj = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
// console.log(jsonData)

//Use it for API request
// fetch('ArtData.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     let jsonData = data;
//   })
//   .catch(error => console.error(error));
