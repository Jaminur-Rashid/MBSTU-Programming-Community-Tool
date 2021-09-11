import React from 'react';
import './Slideshow.css';
import { Carousel } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg,Button} from 'react-bootstrap'
import image from './../assets/image-1.PNG';
import './CardComponent.css';

function CardComponent(){
    return (
        <div className="cardCom">
            <div className="c">
            <div className="column">
            <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img   variant="top"  src={image} />
            <Card.Body>
                <Card.Title>Name :aaa</Card.Title>
                <p>abc University</p>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
            <div className="column">
            <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
            <div className="column">
            <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={image}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
            <div className="column">
            <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
        </div>
        </div>
    );
}
export default CardComponent;