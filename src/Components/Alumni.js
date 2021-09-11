import React, { Component } from 'react';
import { CardColumns, Carousel} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card,Dropdown,Table,CardGroup,Col,Container,Row, CardText, CardBody, CardTitle, ListGroup,CardSubtitle,  CardColumn , CardImg,Button} from 'react-bootstrap'
import './Alumni.css';
import axios from 'axios';
import image from '../assets/image-1.PNG';
import d from '../data/alumniData.json';
import DemoComponent from './DemoComponent';
class Alumni extends Component {
    render() {
        return (
            <div className="alumniWraper">
              <DemoComponent/>
                <h6 className="alumniHead">Information Of All the Members of the Alumni </h6>
                        <table id="alumniInfo">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Batch</th>
                            <th>Role</th>
                            <th>Company</th>
                        </tr>
                        <tr>
                          <td>{d[0].name}</td>
                          <td>{d[0].email}</td>
                          <td>{d[0].phone}</td>
                          <td>{d[0].batch}</td>
                          <td>{d[0].role}</td>
                          <td>{d[0].company}</td>
                        </tr>
                        <tr>
                        <td>{d[1].name}</td>
                          <td>{d[1].email}</td>
                          <td>{d[1].phone}</td>
                          <td>{d[1].batch}</td>
                          <td>{d[1].role}</td>
                          <td>{d[1].company}</td>
                        </tr>
                        <tr>
                        <td>{d[2].name}</td>
                          <td>{d[2].email}</td>
                          <td>{d[2].phone}</td>
                          <td>{d[2].batch}</td>
                          <td>{d[2].role}</td>
                          <td>{d[2].company}</td>
                        </tr>
                        <tr>
                        <td>{d[3].name}</td>
                          <td>{d[3].email}</td>
                          <td>{d[3].phone}</td>
                          <td>{d[3].batch}</td>
                          <td>{d[3].role}</td>
                          <td>{d[3].company}</td>
                        </tr>
                        <tr>
                        <td>{d[4].name}</td>
                          <td>{d[4].email}</td>
                          <td>{d[4].phone}</td>
                          <td>{d[4].batch}</td>
                          <td>{d[4].role}</td>
                          <td>{d[4].company}</td>
                        </tr>
                        <tr>
                        <td>{d[5].name}</td>
                          <td>{d[5].email}</td>
                          <td>{d[5].phone}</td>
                          <td>{d[5].batch}</td>
                          <td>{d[5].role}</td>
                          <td>{d[5].company}</td>
                        </tr>
                        <tr>
                        <td>{d[6].name}</td>
                          <td>{d[6].email}</td>
                          <td>{d[6].phone}</td>
                          <td>{d[6].batch}</td>
                          <td>{d[6].role}</td>
                          <td>{d[6].company}</td>
                        </tr>
                        <tr>
                        <td>{d[7].name}</td>
                          <td>{d[7].email}</td>
                          <td>{d[7].phone}</td>
                          <td>{d[7].batch}</td>
                          <td>{d[7].role}</td>
                          <td>{d[7].company}</td>
                        </tr>
                        <tr>
                        <td>{d[8].name}</td>
                          <td>{d[8].email}</td>
                          <td>{d[8].phone}</td>
                          <td>{d[8].batch}</td>
                          <td>{d[8].role}</td>
                          <td>{d[8].company}</td>
                        </tr>
                        <tr>
                          <td>{d[0].name}</td>
                          <td>{d[0].email}</td>
                          <td>{d[0].phone}</td>
                          <td>{d[0].batch}</td>
                          <td>{d[0].role}</td>
                          <td>{d[0].company}</td>
                        </tr>
                        <tr>
                        <td>{d[1].name}</td>
                          <td>{d[1].email}</td>
                          <td>{d[1].phone}</td>
                          <td>{d[1].batch}</td>
                          <td>{d[1].role}</td>
                          <td>{d[1].company}</td>
                        </tr>
                        <tr>
                        <td>{d[2].name}</td>
                          <td>{d[2].email}</td>
                          <td>{d[2].phone}</td>
                          <td>{d[2].batch}</td>
                          <td>{d[2].role}</td>
                          <td>{d[2].company}</td>
                        </tr>
                        <tr>
                        <td>{d[3].name}</td>
                          <td>{d[3].email}</td>
                          <td>{d[3].phone}</td>
                          <td>{d[3].batch}</td>
                          <td>{d[3].role}</td>
                          <td>{d[3].company}</td>
                        </tr>
                        <tr>
                        <td>{d[4].name}</td>
                          <td>{d[4].email}</td>
                          <td>{d[4].phone}</td>
                          <td>{d[4].batch}</td>
                          <td>{d[4].role}</td>
                          <td>{d[4].company}</td>
                        </tr>
                        <tr>
                        <td>{d[5].name}</td>
                          <td>{d[5].email}</td>
                          <td>{d[5].phone}</td>
                          <td>{d[5].batch}</td>
                          <td>{d[5].role}</td>
                          <td>{d[5].company}</td>
                        </tr>
                        <tr>
                        <td>{d[6].name}</td>
                          <td>{d[6].email}</td>
                          <td>{d[6].phone}</td>
                          <td>{d[6].batch}</td>
                          <td>{d[6].role}</td>
                          <td>{d[6].company}</td>
                        </tr>
                        <tr>
                        <td>{d[7].name}</td>
                          <td>{d[7].email}</td>
                          <td>{d[7].phone}</td>
                          <td>{d[7].batch}</td>
                          <td>{d[7].role}</td>
                          <td>{d[7].company}</td>
                        </tr>
                        <tr>
                        <td>{d[8].name}</td>
                          <td>{d[8].email}</td>
                          <td>{d[8].phone}</td>
                          <td>{d[8].batch}</td>
                          <td>{d[8].role}</td>
                          <td>{d[8].company}</td>
                        </tr>
                      </table>
            
            </div>
        );

      }
    }

export default Alumni;