const mongoose=require('mongoose');
const Schema=mongoose.Schema;
/*
    define UserSchema
*/
const contestPerformenceSchema=new mongoose.Schema({
    contestName:{
        type:String,
        required:true
    },
    coachName:{
        type:String,
        required:true
    },
    contestRank:{ 
        type: String,
        required:true
    },
    contesttentOne:{
        type:String,
        required:true
    },
    contesttentTwo:{
        type:String,
        required:true
    },
    contesttentThree:{
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
const contestPerSch=mongoose.model('Contest',contestPerformenceSchema);
module.exports=contestPerSch;