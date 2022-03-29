const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
     filname:{
       type:String,
       required:true
     },
     path:{
       type:String,
       required:true
     },
    //  username:{
    //     type:String,
    //     required:true
    //  }
})
const model = new mongoose.model("Profile",profileSchema)

module.exports = model