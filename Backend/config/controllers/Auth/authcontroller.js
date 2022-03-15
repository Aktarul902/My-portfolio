
function authcontroller(){
    const Data = require("../../Models/signupdata")
    const bcrypt = require("bcrypt")
 return {
     signin(req,res){
         res.render("login")
     },
     signup(req,res){
          res.render("signup")
     },
     async authsignup(req,res){
       const {username,email,password,cpassword} = req.body
       if(!username || !email, !password ,!cpassword){
          return  res.render("signup",{
               error:"All fields are required"
           })
       }
       if(!password===cpassword){
        return  res.render("signup",{
            error:"password are not match"
        })
       }
       const userexist = await Data.findOne({email:email})
       if(userexist){
           return res.render("signup",{
               error:"email is already exist"
            })
        }
        const hashpassword = await bcrypt.hash(password,10)
        const hashcpassword = await bcrypt.hash(cpassword,10)
        const data= new Data({
           name:username,
           email,
           password:hashpassword,
           cpassword:hashcpassword
        })
        const token = await data.genwebtoken();
        res.cookie("auth",token);
        const response = await data.save()
        return res.redirect("/login")
     },
     async authlogin(req,res){
        const {email , password}= req.body
        if(!email|| !password){
            return res.render("login",{
                error:"All fields are required"
            })
        }
        const data = await Data.findOne({email})
        const hashpassword = await bcrypt.compare(password,data.password)
        if(data && hashpassword){
            console.log("login succesful")
            return res.redirect("/")
        }else{
            res.status(404)
            
            return res.render("login",{
                error:"invalid login"
            })
        
        }
     }

 }
}
module.exports = authcontroller