import fs from 'fs';
let filePath = 'E:/Website Design/InstagramBOT/New-InstaBOT/images/post1/image0.jpg';


fs.stat(filePath , function (err, stats) {
    console.log(stats); //here we got all information of file in stats variable
 
    if (err) {
        return console.error(err);
    }
 
    fs.unlink(filePath ,function(err){
         if(err) return console.log(err);
         console.log('file deleted successfully');
    });  
 });