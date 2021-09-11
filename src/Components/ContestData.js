/*
    Component for fetching all the contest perforing data
    and displaying them in the User Interface
*/
import  {React,useState,useEffect} from 'react'
import axios from 'axios'
import './Data.css'
import {Link} from 'react-router-dom'
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import DemoComponent from './DemoComponent'

 const ContestData=()=>{
     const [error,setError]=useState(null)
     const [isLoaded,setIsLoaded]=useState(false)
     const [classData,setClassData]=useState([])
     /*
         useEffect hook to fetch data from server
     */
    useEffect(() => {
        fetch("/api/v1/contestPerformences/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setClassData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    /*
        if no data in the state
    */
     if(!isLoaded){
         return(
             <h4>Loading...</h4>
         )
     }
     /*
        if any error occurs 
     */
     else if(error){
         return(
            <div>Error: {error.message}</div>
         );
     }
     /*
        if data is available in the state
    */
     else{
  return(
      <div className="contestDataWraper">
          <div style={{marginBottom:'10px'}}>
          <DemoComponent/>
          </div>
          <h3 className="contestDataHead" style={{textAlign:'center'}}>Inter University and ICPC Contest Data</h3>
          <table id="contestDataInfo" style={{margin:'10px 20px 20px 20px',borderRadius:'5px'}}>
          <tr>
          <th>Contest Name</th>
          <th>Coach</th>
          <th>Rank</th>
          <th>Contesttent One</th>
          <th>Contesttent Two</th>
          <th>Contesttent Three</th>
          <th></th>
          </tr>
          { classData.map(user => (
              <tr style={{paddingButtom:'50px'}}>
              <td>{user.contestName}</td>
              <td>{user.coachName}</td>
              <td>{user.contestRank}</td>
              <td>{user.contesttentOne}</td>
              <td>{user.contesttentTwo}</td>
              <td>{user.contesttentThree}</td>
              <td>
              <Link  to={`/show-contest-data/${user._id}`}>
                  <span style={{marginLeft:"10px",height:"60px",width:"45px",backgroundColor:"#04AA6D",color:"white",borderRadius:"1px"}}>More</span>
              </Link>
              </td>
          </tr>
           ))}
        </table>
        <div className="paginationSection" style={{marginLeft:'15%'}}>
            <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
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
 export default ContestData;
