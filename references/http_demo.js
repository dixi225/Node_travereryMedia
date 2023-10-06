const http=require('http')
const port=3000
const server=http.createServer((req,res)=>{
    res.write("Server AHOY!!!!")
    res.end()
})
server.listen(port,()=>console.log(`Listening at Port ${port}`))