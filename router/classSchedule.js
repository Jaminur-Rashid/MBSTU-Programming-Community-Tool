//const { Router } = require('express');
const express=require('express')
const router=express.Router();
//const mongoose=require('mongoose')
//const Users=require('./../model/userSchema');
const classSchedule=require('./../model/classScheduleSchema');
//const Users=mongoose.model('Users',userSchema);
console.log("Before Server connected")
const dbo=require('./../db/connection');
console.log("After Server connected")
router.get('/',(req,res)=>{
    res.send('Response from server at server Home page route');
});
/*
    get user data from front end to back end
*/
router.post('/api/v1/classes/add',(req,res)=>{
   // const {teacher,arr,topic,classDate,batch}=req.body;
    //arr.push(1);
    const {teacher,topic,d,batch}=req.body;
    console.log("Teacher : "+teacher+" topic : "+topic+" date : "+d+" batch : "+batch)
   
    
    try{
        const nextClass=new classSchedule({teacher,topic,d,batch});
        nextClass.d="3-3-2222"
        //const nextClass = new classSchedule({teacher,arr,topic,classDate,batch});\
        //const nextClass=new classSchedule();
        /*
        nextClass.teacher="tarun"
        nextClass.arr.push("Binary search")
        nextClass.arr.push("dp")
        nextClass.date="403-3-3333"
        nextClass.batch="4-2"
        nextClass.topic="gsgsgsgs"
        */
        //const isRegistered=User.find({email:email})
           //nextClass.date="2-4-2021"
            nextClass.save().then(()=>{
                res.status(201).json({message:"New Class Successfully added"});
            }).catch((err)=>{
                res.status(500).json({message:"Failed to add class"});
            })
    }
    catch(err){
        res.status.json({message:"Something went wrodng"})
    }   
    //res.status(200).json({message:"New Class Added"});

   
 })

 /*
     get the data of all the users
 */

     router.get('/api/v1/classes/all',(req,res)=>{
         
        let classes = classSchedule.find({}, function(err, classes){
            if(err){
                console.log(err);
            }
            else {
                res.json(classes);
            }
        });
        //res.json({message:"works"});
     })
/*
    user signin route
*/
router.get('/api/v1/classes/class',(req,res)=>{
    res.json({message:"class 1"})
})
router.post('/',(req,res)=>{
    console.log("test done")
})
module.exports=router;
/*
{
    "name":"jaminur rashid",
    "email":"CE-16034@gmail.com",
    "batch":"13th",
    "codeforcesId":"jaminurrashid",
    "uvaOJId":"jaminurrashid",
    "password":"jjjj",
    "cPassword":"jjjj"
}
*/