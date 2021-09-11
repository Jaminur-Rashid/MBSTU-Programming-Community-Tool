import React, { useState} from 'react'

import './AddContest.css'
import axios from 'axios';
/*
    Component for adding new contest performence data
    including contest name, Coach name, Contest rank
    and contesttent name
*/
const  AddContest=()=>{
    const [newContestData,setContestData]=useState({
        contestName:"",
        coachName:"",
        contestRank:"",
        contesttentOne:"",
        contesttentTwo:"",
        contesttentThree:""
      })
      let name,value;
            const handleInputs=(e)=>{
                console.log(e);
                name=e.target.name;
                value=e.target.value;
                setContestData({...newContestData,[name]:value})
            }
            /*
                method to post a new data to the server

            */
            const postData=(e)=>{
                /*
                    Destructuring input field data
                */
                const { contestName,coachName, contestRank, contesttentOne,contesttentTwo,contesttentThree}=newContestData;
                console.log("Debug ###")
                console.log(newContestData)

                const contestObj=(newContestData);
                axios
                  .post("/api/v1/contestPerformences/add", contestObj)
                  .then((res) => console.log(res.data));
                   const data=111;
                if(data.status===422 || !data){
                window.alert("New Contest data Added")
                console.log("Invalid Registration")
                }
                else {
                window.alert("New Contest data Added");
                console.log("ssss")
                }
            }
    return(
        <div className="addContestDiv">
            <form method="POST">
            <div class="container">
                <p>Please fill the field</p>
                <label for="email" ><b>Contest Name : </b></label>
                <input type="text" placeholder="Enter Contest Name" name="contestName"  value={newContestData.contestName} onChange={handleInputs} />
                <label for="email" ><b>Coach Name : </b></label>
                <input type="text" placeholder="Enter Coach Name" name="coachName" id="coach" value={newContestData.coachName} onChange={handleInputs} required/>
                <label for="email"><b>Contest Rank : </b></label>
                <input type="text" placeholder="Enter Contest Rank" name="contestRank" id="contestRank" value={newContestData.contestRank} onChange={handleInputs} required/>
                <label for="email"><b>Contesttent One : </b></label>
                <input type="text" placeholder="Enter Contestent Name" name="contesttentOne" id="contesttentOne" value={newContestData.contesttentOne} onChange={handleInputs} required/>
                <label for="email"><b>Contesttent Two : </b></label>
                <input type="text" placeholder="Enter Contesttent Name" name="contesttentTwo" id="contesttentTwo" value={newContestData.contesttentTwo} onChange={handleInputs}required/>
                <label for="email"><b>Contesttent Three: </b></label>
                <input type="text" placeholder="Enter Contesttent Name" name="contesttentThree" id="contesttentThree" value={newContestData.contesttentThree} onChange={handleInputs} required/>
                <p>By creating an account you agree to our <a href="aa">Terms & Privacy</a>.</p>
            </div>
            
            <div class="container signin">
                <p>Already have an account? <a href="a">Sign in</a>.</p>
            </div>
            </form>
            <button type="submit" class="registerbtn" onClick={postData}>Register</button>
        </div>
    );
}
export default AddContest;