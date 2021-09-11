import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PeoplesDetails from '../Components/PeoplesDetails';
import { Component } from 'react';
import './Peoples.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns, Carousel,V } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown, CardText, CardBody, CardTitle, CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import image from './../assets/image-1.PNG';
import image1 from './../assets/image-2.PNG';
import {useState } from "react";
function Peoples(){
 
   return(
       <div className="faculty-container">
         <h6 className="h">All The Teachers Info  </h6>
        <div className="top">
        <Dropdown  id="dropdown-basic">
			<Dropdown.Toggle variant="success" id="dropdown-basic">
		    Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
				    <Dropdown.Item href="#/action-2"><Link className="t" to='peoples'>Peoples</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Link className="t" to='/staff'>Staff</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Link className="t" to='/'>Home</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Link className="t" to='/'>Home</Link></Dropdown.Item>
			</Dropdown.Menu>
	   </Dropdown>
        </div>
       <CardColumns>
       <Card  style={{ width: '18rem' ,height:'18rem'} }>
         <Card.Img variant="top"  className="crd"
         src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success">
          
  </Button>{' '}
         </div>
       </Card>
 
       <Card  style={{ width: '18rem' ,height:'18rem'} } >
         <Card.Img variant="top"  className="crd" src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <h3 class="first-txt"> 
            Md. Rakibul Islam
        </h3> 
         <Card.Title className="post">Professor</Card.Title>
         <div className="center">
         <Button style={{}} variant="success"><Link to='/detail'>Details</Link></Button>{' '}
         </div>
       </Card>

     </CardColumns>
       </div>
   )
}
export default Peoples;