const mongoose=require('mongoose');
const Schema=mongoose.Schema;
/*
    define InterviewExperience Schema
*/
const InterviewExperienceSchema=new mongoose.Schema({
    myEmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    creationDate:{ 
        type: String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    jobRole:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    commentText:{
        type:String,
        required:true
    }

})
//,{timestamps: true});
/*
@mongoose.model('users', UserSchema)
 registers our schema with mongoose.
 Our user model can then be accessed anywhere in our application
  by calling mongoose.model('User').
*/
const InterviewExp=mongoose.model('Interview',InterviewExperienceSchema);
module.exports=InterviewExp;