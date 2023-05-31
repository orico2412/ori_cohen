//import and set up
const express = require('express');
const path = require('path');
const app = express();
const port = 2023;
app.use(express.static(path.join(__dirname,"static")));

//routing
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"));
}); 

app.get('/formHandler', (req,res)=>{
    res.send("thank you");
});


//listen
app.listen(port, ()=> {
    console.log("server is running on port ", port); 
});