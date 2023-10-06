//file-system
const fs=require('fs')
const path =require('path')

//Asynchronous as well as synchronous version, asynchronous one has also callback assosiated to it

//creating folder

// fs.mkdir(path.join(__dirname,'/test'),{},err=>
// {   if(err) throw err
//     else console.log("Folder Created....")})

//Create and write to file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Namaste world',err=>console.log("File written"))
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Namaste exoplanets',err=>{
    if(err) throw err
    else 
    {
        console.log("File written")
        fs.appendFile(path.join(__dirname,'/test','hello.txt'),' Namaste Sub ExoPlanets',err=>console.log("File appended"))    
    }
}
)  //it will replace the previously writefile statement 

//Reading a file 

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>
{
    if(err) throw err;
    else console.log(data);
})

