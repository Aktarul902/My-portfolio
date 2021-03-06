const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
     role:{
       type:String,
       default:"user",
       required:false
     },
    //  filname:{
    //    type:String,
    //    required:true
    //  },
    //  path:{
    //    type:String,
    //    required:true
    //  }
})
signupSchema.methods.genwebtoken= async function(){
    try{
  
    
    const token = await jwt.sign({_id:this._id.toString()},"mynameisaktarulrajthisismehellowelcome;")
    this.tokens= await this.tokens.concat({token:token});
    console.log(token);
    await this.save();
    return token
    }catch(e){
      console.log(e);
    }
  }
const model = new mongoose.model("Signupdata",signupSchema)
module.exports = model