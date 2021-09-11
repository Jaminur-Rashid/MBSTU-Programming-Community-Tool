const express=require('express')
const router=express.Router();
const classAssignment=require('./../model/classAssignmentSchema');
console.log("Before Server connected")
const dbo=require('./../db/connection');
console.log("After Server connected")

/*
   add new class Assignment router
*/
console.log("Its Ok")

router.post('/api/v1/Assignment/add',(req,res)=>{
    
    
     const {topic,date,lastDate,batch,problemId,problemIndex}=req.body;
     //console.log("Teacher : "+teacher+" topic : "+topic+" date : "+d+" batch : "+batch)
    
     
     try{
         const assignmentData=new classAssignment({topic,date,lastDate,batch,problemId,problemIndex});
         assignmentData.save().then(()=>{
                 res.status(201).json({message:req.body});
                 //alert("Successfully Added")
             }).catch((err)=>{
                 console.log(err)
                 res.status(500).json({message:"Failed to add class assignment"});
             })
     }
     catch(err){
         res.status.json({message:"Something went wrodng"})
     }   
     //res.status(200).json({message:"New Contest Data Added"});
 
    
  })

  /*
     get the data of all assignment
 */

     router.get('/api/v1/Assignment/all',(req,res)=>{
         
        let assignment = classAssignment.find({}, function(err, assignment){
            if(err){
                console.log(err);
            }
            else {
                res.json(assignment);
            }
           
        });
    })
     /*
        get a single assignment
     */
    /*
    router.get('/api/v1/Assignment/:id',(req,res,next)=>{
        const idd=req.params.id
        console.log("Ok")
        classAssignment.findById(idd)
        .then(result=>{
            res.status(500).json({
                assignment:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    });
    */
 // @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/api/v1/Assignment/:id', (req, res) => {
    classAssignment.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  });

  module.exports=router;