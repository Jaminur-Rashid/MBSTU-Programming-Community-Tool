//const { Router } = require('express');
const express=require('express')
const router=express.Router();
//const mongoose=require('mongoose')
//const Users=require('./../model/userSchema');
const User=require('./../model/userSchema');
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
router.post('/register',(req,res)=>{
    const {name, email, batch, codeforcesId, uvaOJId, password, cPassword}=req.body;
    if(!name || !email ||!batch || !codeforcesId || !uvaOJId || !password || !cPassword){
        return(res.json({error:"Plz fill all the required field"}))
    }
    console.log("Debug : ###")
    try{
        const usr = new User({name, email, batch, codeforcesId, uvaOJId, password, cPassword});
        const isRegistered=User.find({email:email});
        
        if(isRegistered==="sddd"){
            res.status(500).json({message:"Already Registered"});
        }
        else{
            usr.save().then(()=>{
                res.status(201).json({message:"User Successfully registered"});
            }).catch((err)=>{
                res.status(500).json({message:"Failed to register"});
            })
            }
    }
    catch(err){
        res.status.json({message:"Something went wrodng"})
    }   
 })

 /*
     get the data of all the users
 */

     router.get('/users/all',(req,res)=>{
        //const {name, email, batch, codeforcesId, uvaOJId, password, cPassword}=req.body;
       //const usr =new User();
       /*
       let db_connect = dbo.getDb("Final-Year-Project-Database");
        
        db_connect.collection("users")
        .find({})
        .toArray(function (err, result) {
        if (err) throw err;
        */
        let user = User.find({}, function(err, user){
            if(err){
                console.log(err);
            }
            else {
                res.json(user);
            }
        });
        //res.json({message:"works"});
     })
/*
    user signin route
*/
router.post('/signin',(req,res)=>{
    const {name,email, ...rest}=req.body;
    console.log(rest)
   try{
       const isOk=User.find({email:email});
       if(isOk){
        res.json({message:"Signed in Successfully"});
       }
       else{
        res.json({message:"Failed to Signed In"});
       }
   }
   catch(err){
    res.json({message:err}); 
   }
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