import  {React,useState,useEffect} from 'react'
import axios from 'axios'
import './Data.css'
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import ContestData from './ContestData';
import DisplayAssignment from './DisplayAssignment'
import DisplayingAssignment from './DisplayingAssignment'
import DemoComponent from './DemoComponent';
 const  Data=()=>{
     const [error,setError]=useState(null)
     const [isLoaded,setIsLoaded]=useState(false)
     const [classData,setClassData]=useState([])
     /*
         useEffect hook to fetch data from server
     */
    useEffect(() => {
        fetch("/api/v1/classes/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setClassData(result);
            console.log("Data Are : "+result)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        
    }, [])
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
           <>
           <DemoComponent/>
            <div className="dataWrapper">
             <div className="assignmentContainer">
             <DisplayingAssignment/> 
             </div>
            </div>
           </>
         );
     }
 }
 export default Data;
