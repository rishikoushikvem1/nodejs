//console.log("Hello NodeJs")
const http=require('http')
const fs=require('fs')
const path=require('path')

const app=http.createServer((req,res)=>{

    let Contenttype="text/html"
    let file=path.join(__dirname,"public", req.url==='/'?'index.html':req.url)
    let ext=path.extname(file)
    if(!ext){
        file+='.html'
    }
    switch(ext){
        case ".css":
            Contenttype="text/css"
            break
        case ".js":
            Contenttype="text/javascript"
            break
        default:
            Contenttype="text/html"
            break
        
    }
    fs.readFile(file,(err,content)=>{
        if(err){
            res.writeHead(404,{
                "Content-Type":Contenttype
            });
            fs.readFile(path.join(__dirname,"public","error.html"),(err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end("error..!!")
                }
                else{
                    res.end(content)
                }
                
            })
        }
        else{
            res.writeHead(200,{
                "Content-Type":Contenttype
            })
            res.end(content)
          
        }
    })
     
})
const PORT=process.env.PORT ||  3000
app.listen(PORT,()=>{
    console.log("listening on port ",PORT)
})