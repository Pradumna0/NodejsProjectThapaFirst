const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require ("hbs");      // for using the partials 


const staticPath = path.join(__dirname, "../public");   // yah html ki puri file ko use karne ke liye hai 
const templatePath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partial");

// build in  middleware 
// app.use(express.static(staticPath));


// to set the view engine 
app.set('view engine', "hbs");
app.set("views", templatePath);   //  this is for change the name of view directory to template
                                   // thats why it needed  
hbs.registerPartials(partialPath);  /// Registered the partials 


// template engine route 
app.get("/", (req, res)=>{
    res.render('index');
})


app.get("/",(req, res)=>{
    res.send("Hello from the express");
});


 app.get("/about" , (req, res)=>{
     res.render("about");
 })


app.get("/about",(req, res)=>{
    res.send("Hello from about express");
});


app.get('/about/*', (req, res)=>{
    res.render("404",{
        errorcoment : "Opps  this about us page does not found",
    });
});

app.get('*', (req, res)=>{
    res.render("404",{
        errorcoment : "Opps page does not found  Click her eto go back ",
    });
});     //isse sbhi kam chall jayega 





app.listen(8000,()=>{
    console.log("Listing the port at 8000");
});

// API
// get- read
// post - create
// put- update
// delete- delete


