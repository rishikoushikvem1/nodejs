const register=function greet(username){
    console.log("user "+ username +" has registered");
}
const login=function logedin(username){
    console.log(username+" has logged in.");
}
module.exports={
    register,
    login,
}