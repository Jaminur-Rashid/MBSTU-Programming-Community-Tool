import  {React,useState,useEffect} from 'react'
import axios from 'axios'
import './Data.css'
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import { Route,Link,withRouter  } from 'react-router-dom'
import ContestData from './ContestData';
import DisplayAssignment from './DisplayAssignment'
import DisplayingAssignment from './DisplayingAssignment'
import DemoComponent from './DemoComponent';
import './ClassData.css'
 const ClassData=()=>{
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
            <div className="abc">
            <div  style={{backgroundColor:'red'}}>
            <DemoComponent/>
            </div>
            <h3 className="classDataHead" style={{textAlign:'center'}}>Upcoming Class Notice</h3>
            <div className="tableContainer">
            <table id="classDataInfo" style={{margin:'10px 20px 20px 20px',borderRadius:'5px'}}>
            <tr style={{backgroundColor:'#212529',color:'white'}}>
            <th>Teachers</th>
            <th>Topic</th>
            <th>Batch</th>
            <th>Date</th>
            <th>More</th>
            </tr>
            { classData.map(user => (
                <tr style={{paddingButtom:'50px'}}>
                <td>{user.teacher}</td>
                <td>{user.topic}</td>
                <td>{user.batch}</td>
                <td>3-8-2021</td>
                <td>
                <Link  to={`/show-contest-data/${user._id}`}>
                    <span style={{marginLeft:"10px",height:"60px",width:"45px",backgroundColor:"#04AA6D",color:"white",borderRadius:"1px"}}>More</span>
                </Link>
                </td>
            </tr>
             ))}
          </table>
        </div>
          <div className="paginationSection" style={{marginLeft:'15%'}}>
              <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
  
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active style={{backgroundColor:"purple"}}>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>
  
              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
              </Pagination>
          </div>      
       </div>
         );
     }
 }
 export default ClassData;
 /*
  {/*
             <div className="dataWrapper">
               <DemoComponent/>
               <div className="dataFlexContainer">
               <div>
               <ListGroup.Item as="li" active style={{textAlign:'center',backgroundColor:'#00995c'}}>
                  Class Schedule
               </ListGroup.Item>
               <ListGroup.Item id="listId" style={{width:"100%"}}>
                  <div classname="listContainer">
                  <span >Teachers </span>
                  <span style={{marginLeft:"20px"}}>Topic</span>
                  <span style={{marginLeft:"20px"}}>Batch</span>
                  <span  style={{marginLeft:"20px"}}>Date</span>
                  </div>
                </ListGroup.Item>
              { classData.map(user => (
                <ListGroup as="ul">
                <ListGroup.Item id="listId" style={{width:"100%"}}>
                  <div classname="listContainer">
                  <span >{user.contestName} </span>
                  <span style={{marginLeft:"10px"}}>{user.teacher}</span>
                  <span style={{marginLeft:"10px"}}>{user.topic}</span>
                  <span  style={{marginLeft:"10px"}}>{user.batch}</span>
                  <span style={{marginLeft:"10px",float:"right",height:"20px",width:"35px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px"}}>More</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              ))}
            </div>
          </div>
        </div>
 */
