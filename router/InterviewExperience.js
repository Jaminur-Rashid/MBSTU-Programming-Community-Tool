const express=require('express')
const router=express.Router();
const InterviewExp=require('../model/InterviewExperienceSchema');
console.log("Before Server connected")
const dbo=require('../db/connection');
console.log("After Server connected")

/*
   add new class Assignment router
*/
console.log("Its Ok Interview")

router.post('/api/v1/Interview/add',(req,res)=>{
    
    
     const {myEmail,password,creationDate,companyName,jobRole,review,commentText}=req.body;
     //console.log("Teacher : "+teacher+" topic : "+topic+" date : "+d+" batch : "+batch)
    
     
     
         const assignmentData=new InterviewExp({myEmail,password,creationDate,companyName,jobRole,review,commentText});
         assignmentData.save().then(()=>{
                 res.status(201).json({message:req.body});
                // alert("Successfully Added")
             }).catch((err)=>{
                 console.log(err)
                 res.status(500).json({message:"Faild To Add Interview Experience"});
             })
     /*
     catch(err){
         res.status.json({message:"Something went wrodng"})
     }  
     */ 
     //res.status(200).json({message:"New Contest Data Added"});
 
    
  })
  /*
     get the data of all Interview
 */
     router.get('/api/v1/Interview/all',(req,res)=>{
         
        let interviewData = InterviewExp.find({}, function(err, interviewData){
            if(err){
                console.log(err);
            }
            else {
                res.json(interviewData);
            }
           
        });
    })

 // @route GET api/books/:id
// @description Get single book by id
// @access Public
/*
router.get('/api/v1/Assignment/:id', (req, res) => {
    
    InterviewExp.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  });
  */

  module.exports=router;