const path=require('path');
//console.log("file name: ",path.dirname(__dirname));
//console.log(__filename);
//console.log("filename: ",path.basename(__filename));
const ffs=require('fs');
/*ffs.mkdir(path.join(__dirname,"/test"),(err)=>{
       if(err){
        console.log("something went wrong")
        return
       }
       console.log("new directory created")
})*/
/*ffs.writeFile(path.join(__dirname,"test","test.txt"),"Hello Node",(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("new file created")
    }
})
ffs.readFile(path.join(__dirname,"test","test.txt"),'UTF-8',(err,data)=>{
    if(err){
        throw err
    }
   
        console.log(data);
   
})*/
const os=require('os')
//console.log("os type:",os.type())
//console.log("os platform: ",os.platform())
//console.log("os architecture: ",os.arch())
//console.log("cpu details: ",os.cpus())
//console.log("free memory: ",os.freemem())
//console.log("total memory: ",os.totalmem())
//console.log("uptime: ",os.uptime())
/*ffs.appendFile(path.join(__dirname,"test","test.txt"),"Add something",(err)=>{
    if(err){
     throw err
    }
    else{
        console.log("appended")
    }
})*/
const Emitter = require('events')
const myEmitter=new Emitter()
/*myEmitter.on("somename",(data)=>{
   console.log(data)
})
myEmitter.emit("somename",{
    name:rishi"
})*/
class Auth extends Emitter {
    register(username){
        console.log("registered successfully");
        this.emit("registered",username)
    }
}
const auth=new Auth();
auth.on("registered",(username)=>{
    console.log(`sending email to ${username}`)
})
auth.register("Sachin")