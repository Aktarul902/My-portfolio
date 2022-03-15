const mongoose = require("mongoose");
const dburl = "mongodb://localhost:27017/portfolio"
const mongoconn=mongoose.connect(dburl,{
    useNewUrlParser:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology:false
}).then(data=>{
    console.log("database connect")

}).catch(err=>{
    console.log("connection failed")
})
module.exports = mongoconn