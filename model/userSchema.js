const mongoose=require('mongoose');
const Schema=mongoose.Schema;
/*
    define UserSchema
*/
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    }
    ,
    batch:{
        type:String,
        required:true
    }
    ,
    codeforcesId:{
        type:String,
        required:true
    },
    uvaOJId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cPassword:{
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
const User=mongoose.model('user',userSchema);
module.exports=User;