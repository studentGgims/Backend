const express=require("express");
const app=express();
const port=8080;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs")
});
app.get("/hello",(req,res)=>{
    res.send("hello");
});
app.get("/ig/:username",(req,res)=>{
    let followers=["aman","manish","rohit","shohit"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
    console.log(username,followers);
});
app.get("/rolldice",(req,res)=>{
    let rool=Math.floor(Math.random()*20)+1;
    res.render("rolldice.ejs",{rool});
});
app.listen(port,()=>{
        console.log(`listing on prot ${port}`);
});