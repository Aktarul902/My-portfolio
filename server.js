const express = require("express");
const app = express();
const db =require("./Backend/DB/db")()
const port = process.env.PORT || 5000
const ejs = require("ejs")
const session = require("express-session")
const flash = require("express-flash")
const MongoDbStore = require("connect-mongo")(session)
const path =require("path")
// console.log(db)
let mongodbstore = new MongoDbStore({
    mongooseConnection:db,
    collection:"session"
})
app.use(session({
    secret: "mynameisaktarul",
    resave:false,
    store: mongodbstore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))


app.use(express.static("Frontend"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use((req,res,next)=>{
    res.locals.session = req.session;
    res.locals.token=req.token
    next()
})

app.set('views', path.join(__dirname, '/Frontend/views'))
app.set('view engine', 'ejs')
require("./Backend/router/router")(app)
app.listen(port,()=>{
    console.log(`listen from port no ${port}`)
})