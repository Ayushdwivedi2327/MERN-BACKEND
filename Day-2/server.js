const express = require("express");
const app = express(); // server instancee created
app.get("/", (req, res) => {
    res.send("hello");

});
app.get('/about',(req,res)=>{
    res.send("about page")
})  
app.listen(3000); // server start
