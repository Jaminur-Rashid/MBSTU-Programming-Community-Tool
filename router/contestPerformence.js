const express=require('express')
const router=express.Router();
const contestPerSch=require('./../model/contestPerformenceSchema');
console.log("Before Server connected")
const dbo=require('./../db/connection');
console.log("After Server connected")

/*
   add new contest performence data router
*/

router.post('/api/v1/contestPerformences/add',(req,res)=>{
    
    
     const {contestName,coachName,contestRank,contesttentOne,contesttentTwo,contesttentThree}=req.body;
     //console.log("Teacher : "+teacher+" topic : "+topic+" date : "+d+" batch : "+batch)
    
     
     try{
         const conData=new contestPerSch({contestName,coachName,contestRank,contesttentOne,contesttentTwo,contesttentThree});
             conData.save().then(()=>{
                 res.status(201).json({message:req.body});
             }).catch((err)=>{
                 console.log(err)
                 res.status(500).json({message:"Failed to add class"});
             })
     }
     catch(err){
         res.status.json({message:"Something went wrodng"})
     }   
     //res.status(200).json({message:"New Contest Data Added"});
 
    
  })

  /*
     get the data of all the contest
 */

     router.get('/api/v1/contestPerformences/all',(req,res)=>{
         
        let allContestData = contestPerSch.find({}, function(err, allContestData){
            if(err){
                console.log(err);
            }
            else {
                res.json(allContestData);
            }
        });
     })

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/api/v1/contestPerformences/:id', (req, res) => {
    contestPerSch.findById(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.status(404).json({ nobookfound: 'No Data Found' }));
  });

  module.exports=router;