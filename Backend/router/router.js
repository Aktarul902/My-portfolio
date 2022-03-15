function router(app){
const homecontroller = require("../config/controllers/homecontroller")
const authontroller = require("../config/controllers/Auth/authcontroller")

app.get("/",homecontroller().index)
app.get("/signup",authontroller().signup)
app.get("/login",authontroller().signin)
app.post("/authsignup",authontroller().authsignup)
app.post("/authloginup",authontroller().authlogin)

}
module.exports = router