import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Component } from 'react';
import './Peoples.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns, Carousel,V } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown, CardText, CardBody, CardTitle, CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import image from './../assets/image-1.PNG';
import image1 from './../assets/image-1.PNG';
import DemoComponent from './DemoComponent';


class Gallery extends Component {
  render() {
    return (
      <div className="zoom">
        <DemoComponent/>
        It Contains All the images
        <CardColumns>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1}/>
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
 
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image1} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
       <Card  style={{ width: '18rem' ,height:'18rem'}}>
         <Card.Img variant="top"src={image} />
         <Card.Footer>
           <small className="text-muted">Last updated 10 mins ago</small>
         </Card.Footer>
         <div className="center">
         <Button style={{}} variant="success">Details</Button>{' '}
         </div>
       </Card>
     </CardColumns>
      </div>
    );
  }
}

export default Gallery;