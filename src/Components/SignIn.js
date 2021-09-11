import React, { Component ,useState} from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
/*
    User Sign In component
*/
function SignIn () {
/*
    hook to store user signin data info
*/
  const [user,setUser]=useState({
    name:"",
    email:"",
    codeforcesId:"",
    uvaOJId:"",
    batch:"",
    password:"",
    cPassword:""
  })
  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }
 
  const postData=async(e)=> {
    e.preventDefault();
      console.log(user)
      let {name,email,batch,codeforcesId,uvaOJId,password,cPassword}=user;
    alert(name)
   const newPerson=(user);
   console.log(newPerson)
    axios
    .post("/register", newPerson)
    .then((res) => console.log(res.data));
    const data=111;
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }
    else {
      window.alert("Registration Successfull");
      console.log("ssss")
     }

  }
  
  return (
    <form method="POST">
     <div className="signInContainer">
       <div>
       <label>
        Name:
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleInputs}
        />
      </label>
       </div>
       <div>
       <label>
        email:
        <input
          type="text"
          value={user.email}
          name="email"
          onChange={handleInputs}
        />
      </label>
       </div>
       <div>
         <label>
           Codeforces Id :
         </label>
         <input 
             type="text"
             value={user.codeforcesId}
             name="codeforcesId"
             onChange={handleInputs}
         />
       </div>
       <div>
         <label>
           Uva Id :
         </label>
         <input 
             type="text"
             value={user.uvaOJId}
             name="uvaOJId"
             onChange={handleInputs}
         />
       </div>
       <div>
         <label>
           Batch :
         </label>
         <input 
             type="text"
             value={user.batch}
             name="batch"
             onChange={handleInputs}
         />
       </div>
       <div>
         <label>
           Password:
         </label>
         <input 
             type="password"
             value={user.password}
             name="password"
             onChange={handleInputs}
         />
       </div>
       <div>
         <label>
           Confirm Password :
         </label>
         <input 
             type="password"
             value={name}
             name="cPassword"
             onChange={handleInputs}
         />
       </div>
       <Button variant="danger" onClick={postData}>Danger</Button> {' '}
     </div>
    </form>
  )
}
export default SignIn;