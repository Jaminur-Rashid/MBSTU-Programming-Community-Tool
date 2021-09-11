import React from 'react'
import './Contact.css';
import { Image } from "react-bootstrap";
import DemoComponent from './DemoComponent';
import {Card,Dropdown,CardGroup, CardText, CardBody, CardTitle, ListGroup,CardSubtitle, Form, CardColumn , CardImg,Button} from 'react-bootstrap'

function Contact(){
   return(
    <div className="contactForm">
      <DemoComponent/>
        This is a contact Us Page
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control as="select">
         <option>Default select</option>
         <option>Educational</option>
         <option>Report</option>
         <option>Default select</option>
       </Form.Control>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Say Something</Form.Label>
       <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
   )
}
export default Contact;