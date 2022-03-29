function router(app){
    const auth = require("../config/middleware/auth")
const homecontroller = require("../config/controllers/homecontroller")
const authontroller = require("../config/controllers/Auth/authcontroller")


app.get("/",homecontroller().index)
app.get("/signup",authontroller().signup)
app.get("/login",authontroller().signin)
app.post("/authsignup",authontroller().authsignup)
app.post("/authloginup",authontroller().authlogin)
app.post("/user/send/email",(req,res)=>{
    console.log(req.body)

        const {name ,emailfrom,subject,massage} = req.body
      if(!emailfrom || !massage || !name || !subject){
          res.render("index",{
              error:"All filled are requied"
          })
      }
      console.log(emailfrom)
      require("../services/sendemail")({
          from:emailfrom,
          to:"aktarulmondal2740@gmail.com",
          subject:subject,
          text:`${name} send a email  with ${subject} this purpuse `,
          html:require("../services/emailtemplates")({
              emailfrom,
              name,
              massage,
              subject,
          })
      })
      return res.redirect("/")
})
app.get("/logout",authontroller().logout)


}
module.exports = router