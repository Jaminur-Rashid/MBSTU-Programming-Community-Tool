import React, { Component } from 'react';
import { CardColumns, Carousel} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown,CardGroup, CardText, Container, Nav, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import Navbar from 'react-bootstrap/Navbar'
import './Leaderboared.css';
import './DemoComponent'
import axios from 'axios';
import { Route } from 'react-router-dom'
import DemoComponent from './DemoComponent';

/*
    Component for creating leaderbored based on
    codeforces rating using codeforces api
*/

class Leaderboared extends Component {
  state={
    rat:[ ],
    sub:[ ],
    userSub:[],
    userList:[]
  }
  /*
  function to pass user handle to UserDetails component when button is clicked
  */
  getUserHandle=(hdle)=>{
    this.props.history.push({
      pathname: '/check',
      state:{username:hdle,email:"jaminur@",city:"dhaka",phone:"012992929299"}
      //state: {_id: "0001", name: "AZ"}}
    });
  };
  /*
      a function tat takes user codeforces rating as arguments
      and returns the user handle text color as per as codeforces policy.
  */
  getColor(usrRating){
    let colorArray=["red","blue"];
   if(usrRating<1200){
     return("#4d4d4d");
   }
   else if(usrRating<1200){
     return("#4d4d4d");
   }
   else if(usrRating>=1300 && usrRating<1400){
     return("green");
   }
   else if(usrRating>=1600 && usrRating<1900){
     return("purple")
   }
   else if(usrRating>=1400 && usrRating<1600){
     return("#03a89e");
   }
  }
  componentDidMount(){

   let ratingUrl="https://codeforces.com/api/user.info?handles=";
   let contestentList=["the_belal","jaminurrashid","FrozenBeast028","jaminurrashid","iamsadee","Hasib_16","_Subrata","Nafis.Shahriar","Evanraisul","RKD","the_belal"];
   /*
      fetch all the user id from the server
      and store them in userList state
   */
   axios.get("/users/all")
   .then(response=>{
   this.setState({
     userList:response.data
   })
 })

   for(let i=0;i<contestentList.length;i++){
     if(i===contestentList.length-1){
      ratingUrl=ratingUrl+contestentList[i];
     }
     else{
      ratingUrl=ratingUrl+contestentList[i];
      ratingUrl=ratingUrl+';';
     }
   }
   /*
       get userlist from the server
  */

       axios.get(ratingUrl)
       .then(response=>{
       this.setState({
         rat:response.data.result.slice(0,40)
       })
     })
  }
  render() {
    const {rat}=this.state
    const {userList}=this.state
    console.log("Users are : "+userList)
    console.log(" check "+typeof(rat));
    /*
        sort the rat array in descending order
    */
    rat.sort((a, b) => b.rating - a.rating);
    let active = 2;
    let items = [];
    for (let number = 1; number <= rat.length/5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    if(this.state.rat.length===0){
      return(
        <div>
          <p style={{textAlign:'center',color:'chocolate'}}>It May Take Some Time</p>
          <div className="loader"></div>
        </div>
       
      )
    } 
    else{
      console.log(this.state)
      console.log(rat.length);
      return(
        <div>
          <DemoComponent/>
          {/*
          <div class="topnav">
              <a  href="addNewClass">Add Class</a>
              <a href="signin">Register</a>
              <a href="assignment">Assignment</a>
              <a href="#about">Interview Experience</a>
              <a  href="addContest">Contest Data</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
          </div>
          */}
          <div className="leaderboaredFlexContainer">
            <div>
            <ListGroup.Item as="li" active style={{textAlign:'center',backgroundColor:'#00995c'}}>
                  Leaderboard
            </ListGroup.Item>
             { this.state.rat.map(user => (
                <ListGroup as="ul">
                  <ListGroup.Item>
                    <div classname="listContainer">
                    <p  style={{display:'inline'}}><Card.Img  variant="top"   style={{ width: '2rem',display:'inline' }} src={user.titlePhoto} alt="" /></p>
                    <p style={{display:'inline',paddingLeft:'50px',marginRight:'90px',color:this.getColor(user.rating),width:'60px'}}>{user.handle} </p>
                    <p style={{display:'inline',width:'60px'}}>{user.rating}</p>
                    <span style={{marginLeft:"10px",float:"right",height:"20px",width:"35px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px"}} className="button"  onClick={() => this.getUserHandle(user.handle)}>More</span>
                    </div>
                  
                  </ListGroup.Item>
                </ListGroup>
              ))}
             <Pagination style={{marginTop:'30px'}}>{items}</Pagination>
            </div>
            <div>
            <ListGroup.Item as="li" active style={{textAlign:'center',backgroundColor:'#00995c'}}>
                  Leaderboard
            </ListGroup.Item>
             { this.state.userList.map(user => (
                <ListGroup as="ul">
                  <ListGroup.Item>
                    <div classname="listContainer">
                    <p  style={{display:'inline'}}><Card.Img  variant="top"   style={{ width: '2rem',display:'inline' }} src={user.titlePhoto} alt="" /></p>
                    <p style={{display:'inline',paddingLeft:'50px',marginRight:'90px',color:this.getColor(user.rating),width:'60px'}}>{user.codeforcesId} </p>
                    <p style={{display:'inline',width:'60px'}}>{user.rating}</p>
                    <span style={{marginLeft:"10px",float:"right",height:"20px",width:"35px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px"}} className="button"  onClick={() => this.getUserHandle(user.codeforcesId)}>More</span>
                    </div>
                   {/*} style={{marginLeft:"10px",float:"right",height:"20px",width:"35px",backgroundColor:"#1b8c2f",color:"white",borderRadius:"2px"}}
                    style={{width:"50px",height:"35px",backgroundColor:'#1ba94c',color:'#ffffff',textAlign:'center',borderRadius:'3px'}}
                  */}
                  </ListGroup.Item>
                </ListGroup>
              ))}
             <Pagination style={{marginTop:'30px'}}>{items}</Pagination>
            </div>
          </div>
        </div>
       
      )
    }
    
  }
}

export default Leaderboared;