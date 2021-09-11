import React ,{ useState} from 'react'

import './AddAssignment.css'
import axios from 'axios';
/*
    Component for add new assignment for juniors class
    based on the class topic
*/
const AddAssignment=()=>{
    const [newAssignment,setAssignment]=useState({
        topic:"",
        date:"",
        lastDate:"",
        batch:"",
        problemId:"",
        problemIndex:""
    
      })
      let name,value;
      //const {topic,date,lastDate,batch,problemId,problemIndex}=newAssignment;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setAssignment({...newAssignment,[name]:value})
    }

    const postData=(e)=>{
        e.preventDefault();
        const {topic,date,lastDate,batch,problemId,problemIndex}=newAssignment;
        const obj=newAssignment;
        axios
        .post("/api/v1/Assignment/add", newAssignment)
        .then((res) => console.log(res.data));
        const data=111;
        console.log("Data Are : "+obj)
        if(data.status===422 || !data){
           window.alert("Invalid Data")
           console.log("Invalid Data")
    }
        else {
           window.alert("Added Successfully");
           console.log("ssss")
        }
    }
    /*
    let problem=[];
    let problemsIndex=[]
    let problemMap=new Map();
    const addProblem=(e)=>{
        problem.push(problemId);
        problemsIndex.push(problemIndex)
        console.log(problem)
        problemMap.set(problemId,problemIndex);
        problemMap.set(2,problemIndex);
        problemMap.set(4,problemIndex);
        console.log("key is : "+problemMap.get(problemId));
        for (const [key, value] of problemMap) {
            console.log(key + ' = ' + value)
          }
    }
    */
    return(
        <div className="addAssignmentDiv">
            <div class="addAssignmentContainer">
               <p className="headingText">Please fill the field</p>
               <div className="inputWrapper">
               <label id="idd" for="email">Topic   : </label>
                   <input type="text" placeholder="Enter topic name" name="topic"  value={newAssignment.topic} onChange={handleInputs} />
               </div>
               <div className="inputWrapper">
               <label id="idd" for="email">Date  : </label>
                   <input type="text" placeholder="Enter date" name="date" value= {newAssignment.date} onChange={handleInputs} />
               </div>
               <div className="inputWrapper">
               <label id="idd" for="email">Last date    : </label>
                   <input type="text" placeholder="Enter last Date" name="lastDate"  value={newAssignment.lastDate}  onChange={handleInputs} />
               </div>
               <div className="inputWrapper">
               <label id="idd" for="email">Batch :</label>
                   <input type="text" placeholder="Enter Batch Name" name="batch" id="coach" value={newAssignment.batch} onChange={handleInputs} required/>
               </div>
               <div>
               </div>
               <div className="inputWrapper">
               <label id="idd" for="email">Problem ID    : </label>
                   <input type="text" placeholder="Enter last Date" name="problemId"  value={newAssignment.problemId}  onChange={handleInputs} />
               </div>
               <div className="inputWrapper">
               <label id="idd" for="email">Problem Index :</label>
                   <input type="text" placeholder="Enter Batch Name" name="problemIndex" id="coach" value={newAssignment.problemIndex} onChange={handleInputs} required/>
               </div>
               <span style={{marginLeft:"30%",marginTop:"20px",height:"20px",width:"100px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px"}}>More</span>
               <p>By submitting you are going to assign a new class <a href="aa">Terms & Privacy</a>.</p>
               
        </div>
            <button type="submit" class="registerbtn" onClick={postData}>Register</button>
            {/*<button type="submit" class="registerbtn" onClick={addProblem}>Add</button>*/}
        </div>
    );
}
export default AddAssignment;