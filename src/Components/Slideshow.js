import React from 'react';
import './Slideshow.css';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/image-1.PNG';
import image2 from './../assets/image-2.PNG';
import image3 from './../assets/image-3.PNG';
/*
    component for slideshow using react bootstrap
*/
function Slideshow(){
  return (
    <div className="slideWrapper">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img 
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={image1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>.........................</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}
export default Slideshow;