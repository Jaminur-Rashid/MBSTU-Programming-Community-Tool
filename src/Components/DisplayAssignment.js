import  {React,useState,useEffect} from 'react'
import './DisplayAssignment.css'
import AssignmentDetails from './AssignmentDetails';
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import axios from 'axios';
import { Route,Link,withRouter  } from 'react-router-dom'
import { useHistory } from "react-router-dom";



const  DisplayAssignment=(props)=>{
     const [error,setError]=useState(null)
     const [isLoaded,setIsLoaded]=useState(false)
     const [assignmentData,setAssignmentData]=useState([])

     /*
         useEffect hook to fetch data from server
     */
         useEffect(() => {
            fetch("/api/v1/Assignment/all")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setAssignmentData(result);
                console.log("Test Data : "+assignmentData)
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
            //'/api/v1/Assignment/all'
            
        }, [])

        const getAssignmentId=(hdle)=>{
          alert( "Id Is : "+hdle)
          props.history.push('/tmp')
          
        };
        if(!isLoaded){
            return(
                <h4>Loading...</h4>
            )
        }
        else if(error){
            return(
               <div>Error: {error.message}</div>
            );
        }
        else{
            return(
                <div className="parent">
                    <div className="child">
                    <ListGroup.Item id="listId" style={{width:"100%"}}>
                      <h6>All Assignment Notice</h6>
                  </ListGroup.Item>
             { assignmentData.map(user => (
                <ListGroup as="ul">
                  <ListGroup.Item id="listId" style={{width:"100%"}}>
                    <div classname="listContainer">
                      <h6>Assignment on batch  <span style={{color:"purple"}} >{user.batch}</span> in <span style={{color:"green"}}>{user.date }</span>
                      <span style={{color:"purple",float:"right"}} className="button" onClick={() => getAssignmentId(user._id)}>
                         More
                      </span>
                      </h6>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              ))}
                    </div>
                    <div>
                    </div>
              
            </div>
            );
        }

}
export default DisplayAssignment;


