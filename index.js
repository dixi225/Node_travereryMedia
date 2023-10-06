const http=require('http')
const path=require('path')
const fs=require('fs')

const port=process.env.PORT||5000
const server=http.createServer((req,res)=>{
    if(req.url==='/') 
    {   
        fs.readFile(path.join(__dirname,'/public','index.html'),(err,data)=>
        {
            if(err) throw err
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    else if(req.url==='/about')
    {
        fs.readFile(path.join(__dirname,'/public','about.html'),(err,data)=>{
            if(err) throw err
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    else if(req.url==='/api/users')
    {
        res.writeHead(200,{'Content-Type':'application/json'})
        const users=[
        {
            name:'John Doe',
            age:'21',
        },
        {
            name:'Boba fett',
            age:'121'
        }]
        res.end(JSON.stringify(users))
    }
    else res.writeHead(400)
})
server.listen(port,()=>console.log(`Server is listening at port ${port}`))