const express =require("express");
const app = express();
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    console.log("hi");
    
    //res.status(500).send("hello world");
   // res.status(200).send({"error" : "error msg"});
    //res.json({express: "learning express"});
   // res.render("index.ejs",{text:"world"});
    res.send("hello");
});
    app.get("/user",(req, res)=>{
        res.send("user information");
    })
    app.get("/user/newuser",(req, res)=>{
        res.send("new user information");
    })
    app.get("/user/deleteuser",(req, res)=>{
        res.send(" user deleted");
    })
const userRoute = require("./routes/user");
app.use('/user',userRoute);
app.listen(3000);
