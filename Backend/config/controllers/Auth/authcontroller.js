
function authcontroller(){
    const Data = require("../../Models/signupdata");
    const Profiledata = require("../../Models/signupdata");
    const bcrypt = require("bcrypt");
    
 return {
     signin(req,res){
         res.render("login")
     },
     signup(req,res){
          res.render("signup")
     },
     async authsignup(req,res){
         console.log(req.body)
       const {username,email,password,cpassword} = req.body
       if(!username || !email || !password || !cpassword){
          return  res.render("signup",{
               error:"All fields are required"
           })
       }
       if(!password===cpassword){
        return  res.render("signup",{
            error:"password is incorrect"
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

        const response = await data.save()
        return res.redirect("/user/profile")
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
            req.session.token = [{
                username:data.name,
                role:data.role,
                email:data.email
            }]
            console.log("login succesful")
            console.log(req.session)
            return res.render("index",{
                username:req.session.token[0].username,
                email:req.session.token[0].name
            })
        }else{
            res.status(404)
            
            return res.render("login",{
                error:"invalid login"
            })
        
        }
     },
     logout(req,res){
         delete req.session.token
         res.redirect("/")

     },
   

 }
}
module.exports = authcontroller