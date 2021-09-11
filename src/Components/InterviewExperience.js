import React ,{useState} from 'react'
import { Image } from "react-bootstrap";
import {Card,Form,Dropdown,Table,CardGroup,Col,Container,Row, CardText, CardBody, CardTitle, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import './InterviewExperience.css'
import axios from'axios'

const InterviewExperience=(props)=>{
    /*
        declare hook to store input field data
    */
    const [commentText,setCommentText] = useState("")
    const [myEmail,setMyEmail]=useState("")
    const [password,setPass]=useState("")
    const [companyName,setCompanyName]=useState("")
    const [creationDate,setDate]=useState("")
    const [jobRole,setRole]=useState("")
    const [review,setReview]=useState("")
    
    /*
         post data to server on submit button clicked
    */
    const postData=(e)=>{
        alert("Email : "+myEmail+ " password : "+password+"Blog "+commentText+" Company : "+companyName+" Role : "+jobRole+" review"+review+" date : "+creationDate)
        axios
        .post("/api/v1/Interview/add",{myEmail:myEmail,password:password,creationDate:creationDate,companyName:companyName,jobRole:jobRole,review:review,commentText:commentText})
        .then((res) => console.log(res.data));
        const data=1
        if(data.status===422 || !data){
           window.alert("Invalid Data")
           console.log("Invalid Data")
        }
        else {
           window.alert("Added Interview Successfull");
           console.log("ssss")
        }
    }
    return(
        <div className="interviewContainer">
        <h1>Welcome to interview Experience Section</h1>
        <Form type="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Email address</h3>
            <Form.Control 
            type="email" placeholder="First Name" onChange={e => setMyEmail(e.target.value)}
             />
            <h3>Enter Password</h3>
            <Form.Control type="password" placeholder="Enter pass" 
              onChange={e => setPass(e.target.value)}
             required />
            <h3>Enter Date</h3>
            <Form.Control type="text" placeholder="Enter date"  onChange={e => setDate(e.target.value)}  required/>
            <h3>Enter Company</h3>
            <Form.Control type="text" placeholder="Enter company" onChange={e => setCompanyName(e.target.value)} required/>
            <h3>Enter Role</h3>
            <Form.Control type="text" placeholder="Enter role" onChange={e => setRole(e.target.value)}  required/>
            <h3>Enter Your Review About The Company </h3>
            <Form.Control type="text" placeholder="Enter review" onChange={e => setReview(e.target.value)}   required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label>Example textarea</Form.Label>
       <Form.Control as="textarea" rows={3} placeholder="write blog" 
    
          name="commentTextArea"
          type="text"
          id="CommentsOrAdditionalInformation"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
       />
        </Form.Group>
        <Button variant="primary" type="submit"  onClick={postData}>
            Submit
        </Button>
        </Form>
        </div>
    );
}
export default InterviewExperience;