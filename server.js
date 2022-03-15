const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const ejs = require("ejs")
const path =require("path")
app.use(express.static("Frontend"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname, '/Frontend/views'))
app.set('view engine', 'ejs')
require("./Backend/router/router")(app)
require("./Backend/DB/db")
app.listen(port,()=>{
    console.log(`listen from port no ${port}`)
})