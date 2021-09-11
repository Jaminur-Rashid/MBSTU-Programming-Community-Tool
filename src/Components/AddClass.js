import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './AddClass.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
/*
    Component for adding new programming class
    for juniors
*/
function AddClass () {

  const [newClass,setClass]=useState({
    teacher:"",
    topic:"",
    date:"",
    batch:""
  })
  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setClass({...newClass,[name]:value})
  }
 
  const postData=async(e)=> {
    e.preventDefault();
    console.log("debug")
    console.log(newClass)
    const {teacher,topic,date,batch}=newClass;
    alert(teacher)
    const classObj=(newClass);
    console.log(classObj)
    /*
        fetch class data from server using rest api
        and storing them in state
    */
    axios
        .post("/api/v1/classes/add", classObj)
        .then((res) => console.log(res.data));
        const data=111;
    if(data.status===422 || !data){
      window.alert("Invalid Class Data")
      //console.log("Invalid Registration")
    }
    else {
      window.alert("Class added Successfully");
      console.log("ssss")
      }

  }
  return(
    <div className="addClassDiv">
            <form method="POST">
            <div class="addClasscontainer">
                <p className="hh">Please fill the field</p>
                <label for="email"><b>Teacher: </b></label>
                <input type="text" placeholder="Enter Teacher Name" name="teacher"  value={newClass.teacher} onChange={handleInputs} />
                <label for="email"><b>Topic Name : </b></label>
                <input type="text" placeholder="Enter Topic Name" name="topic" id="coach" value={newClass.topic} onChange={handleInputs} required/>
                <label for="email"><b>Date: </b></label>
                <input type="text" placeholder="Enter Class Date" name="date"  value={newClass.date} onChange={handleInputs} />
                <label for="email"><b>Batch : </b></label>
                <input type="text" placeholder="Enter Batch Name" name="batch" id="coach" value={newClass.batch} onChange={handleInputs} required/>
                <p>By submitting you are going to assign a new class <a href="aa">Terms & Privacy</a>.</p>
            </div>
            
            </form>
            <button type="submit" class="registerbtn" onClick={postData}>Register</button>
        </div>
  )
}
export default AddClass;