import React, { Component } from 'react';
import { CardColumns, Carousel} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import Navbar from 'react-bootstrap/Navbar'
import './DisplayingAssignment.css';
import axios from 'axios';
import { Route,Link } from 'react-router-dom'

//import PropsEx from './propsEx';
/*
function sum(a,b){
  return(a+b)
}
*/

class DisplayingAssignment extends Component {
  state={
    ratt:[ ],
    subb:[ ],
    isClicked:false,
    id:0
   
  }
  /*
  function to pass user handle to UserDetails component when button is clicked
  */
  checkId=(i)=>{
      /*
    this.props.history.push({
      pathname: '/myAssignment',
      data:{username:i,email:"jaminur@"}
      //state: {_id: "0001", name: "AZ"}}
    });
    */
   this.setState({
       isClicked:true,
       id:i
   })
  };
  
  
  componentDidMount(){
    fetch("/api/v1/Assignment/all")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
            subb:result
          })
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
      }
    )
  }
  render() {
    const {subb}=this.state
    const {id}=this.state
    const {isClicked}=this.state
  
    /*
        sort the rat array in descending order
    */
        return(
            <div className="parent">
            <div className="child">
            <ListGroup.Item id="listId" style={{width:"100%"}}>
            <h4>All Assignment Notice</h4>
          </ListGroup.Item>
        { subb.map(user => (
         <ListGroup as="ul">
          <ListGroup.Item id="listId" style={{width:"100%"}}>
            <div classname="listContainer">
              <h5>An Assignment have been assigned for batch  <span style={{color:"purple"}} >{user.batch}</span> in <span style={{color:"green"}}>{user.date }</span> on Topic <span style={{color:"purple"}}>{user.topic}</span>
             
             {/*
              <Link 
                  to={{pathname:"/myAssignment",
                  state:{Id:user._id}
              }}
              >More</Link>
            */}
              </h5>
              <span>
              <Link  to={`/show-book/${user._id}`}>
             <span style ={{float:"right",height:"30px",width:"50px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px",alignItems:'center',marginBottom:'40px'}}>More</span>         
             </Link>
             </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))}
            </div>
            <div>
            </div>
      
    </div> 
        )
  }
}

export default DisplayingAssignment ;