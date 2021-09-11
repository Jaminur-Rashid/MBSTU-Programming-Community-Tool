import React, { Component } from 'react';
import { CardColumns, Carousel} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown,CardGroup,Col,Container,Row, CardText, CardBody, CardTitle, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import './Messages.css';
import axios from 'axios';
import image from '../assets/image-1.PNG';
import d from '../data/jsonData';
class Messages extends Component {
    render() {
        return (
            <>
<div className="messageContainer">
<div className="about-section">
  <h1>About Us Section</h1>
</div>

<h2 className="hText">Our Faculty Members</h2>
<div className="row">
  <div className="aboutColumn">
    <div className="card">
      <div className="container">
      <Container>
     <Row>
      <Col xs={6} md={4}>
      <Image style={{ width: '8rem' }} src={image} roundedCircle />
     </Col>
     </Row>
      </Container>
        <h5 style={{color:'#087551'}}>{d[0].name}</h5>
        <p className="title">Dean,Faculty Of Engineering</p>
        <p>{d[0].email}</p>
        <p className="text">{d[0].speech}</p>
        <Button className="b" variant="danger">Details</Button> 
      </div>
    </div>
  </div>

  <div className="aboutColumn">
    <div className="card">
      <div className="container">
      <Container>
     <Row>
      <Col xs={6} md={4}>
      <Image style={{ width: '8rem' }} src={image} roundedCircle />
     </Col>
     </Row>
      </Container>
      <h5 style={{color:'#087551'}}>{d[1].name}</h5>
        <p className="title">Chairman,Faculty Of Engineering</p>
        <p>{d[1].email}</p>
        <p className="text">Computer Science and Engineering is at the intellectual forefront of the digital revolution that will define the 21st century. That revolution is in its early stages but is visible all around us.</p>

        <Button className="b" variant="danger">Details</Button> 
      </div>
    </div>
  </div>
  
  <div className="aboutColumn">
    <div className="card">
      <div className="container">
      <Container>
     <Row>
      <Col xs={6} md={4}>
      <Image style={{ width: '8rem' }} src={image} roundedCircle />
     </Col>
     </Row>
      </Container>
      <h5 style={{color:'#087551'}}>{d[2].name}</h5>
        <p className="title">Dean,Faculty Of Engineering</p>
        <p>{d[2].email}</p>
        <p className="text">Computer Science and Engineering is at the intellectual forefront of the digital revolution that will define the 21st century. That revolution is in its early stages but is visible all around us.</p>
        <Button className="b" variant="danger">Details</Button> 
      </div>
    </div>
  </div>
</div>
</div>
</>
        );
      }
    }

export default Messages;