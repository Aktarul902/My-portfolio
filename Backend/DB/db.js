const mongoose = require("mongoose");
function db(){

    const dburl = "mongodb://localhost:27017/portfolio"
    mongoose.connect(`mongodb+srv://aktarul:123aktar@cluster0.gplk5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        //  useCertificateVerification:false,
        useNewUrlParser:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology:false
    });
    const connection = mongoose.connection;
    return connection
}
module.exports = db