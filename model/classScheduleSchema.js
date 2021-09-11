const mongoose=require('mongoose');
const Schema=mongoose.Schema;
/*
    define UserSchema
*/
const classScheduleSchema=new mongoose.Schema({
    teacher:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    date:{ 
        type: String,
    },
    batch:{
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
const classSchedule=mongoose.model('Classes',classScheduleSchema);
module.exports=classSchedule;