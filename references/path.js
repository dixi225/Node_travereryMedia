const path=require('path')
 //Base file name
 console.log(path.basename(__filename))
//file extension
console.log(path.extname(__filename))
//create parse object
console.log(path.parse(__filename))
//concatenig path
console.log(path.join(__dirname,"test","HELLO.html"))