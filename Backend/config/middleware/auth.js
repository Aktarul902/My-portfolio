const jwt = require("jsonwebtoken");
const path = require("path");
const Data = require("../Models/signupdata")
const auth = async (req,res,next)=>{
    try{

    
    const token = req.cookies.loginjwt
    const verify = jwt.verify(token,"mynameisaktarulrajthisismehellowelcome;");
    console.log(verify);
    const user = await   Data.findOne({_id:verify._id})
    // console.log(user);
    res.user=user;
    res.token = token
    Data.tokens =Data.tokens; 

    next()
    }catch(e){
        // app.use(express.static(static))
        res.status(404)
        return res.redirect("/login")
    }
}
module.exports = auth