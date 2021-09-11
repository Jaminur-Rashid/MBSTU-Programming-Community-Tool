const mongoose = require("mongoose");
const dbUrl='mongodb+srv://jaminur:jaminurrashid16034@cluster0.qoupk.mongodb.net/Final-Year-Project-Database?retryWrites=true&w=majority';
//const mongoose=require(Mongoose)
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
    console.log("Connection Successfull to Url : "+dbUrl);
}).catch(()=>{
    console.log("No Connection");
});