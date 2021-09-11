const mongoose=require('mongoose');
const Schema=mongoose.Schema;
/*
    define UserSchema
*/
const classAssignmentSchema=new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:false
    }
    ,
    lastDate:{
        type:String,
        required:true
    }
    ,
    batch:{
        type:String,
        required:true
    },
    problemId:{
        type:String,
        required:true
    },
    problemIndex:{
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
const classAssignment=mongoose.model('assignment',classAssignmentSchema);
module.exports=classAssignment;