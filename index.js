const exp = require("express")
let app = exp()
console.log(app)

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/ig/:user",(req,res)=>{
    res.send("Good morning user")
})
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})