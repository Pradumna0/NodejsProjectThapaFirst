// www.thapa.com ->welcom to my home page
// /about - welcom to my about page
// /contact - welcom to my contact page
// /temp - welcom to my temp page


const express = require("express");
const app =express();
const port = 3000;

app.get("/",(req, res)=>{
    res.send("welcom to my home page");
});

app.get("/about", (req, res)=>{
    res.write("<h1>welcom to my  about  page </h1>");
});

app.get("/contact", (req, res)=>{
    res.status(200).send("welcom to my  Contact  page pradumna  gothi25");
});

app.get("/temp", (req, res)=>{
    // res.status(200).send("welcom to my temp page");
    // res.send({
    //     id:1,
    //     name:"paradumna",
    // });
    res.json({
        id:1,
        name:"paradumna Gothi",
    });   // res.json non valid json (like null ,undefined ) also accepted  but res.send vo non valid json ko change nhi kar pata hai 

});

app.listen(port, ()=>{
    console.log(`Listening to the port no. ${port}`);
});
