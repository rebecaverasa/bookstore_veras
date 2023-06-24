import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function UncontrolledExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="custom-image"
          src="https://i.pinimg.com/originals/1a/70/e3/1a70e3c1ff1233983508a76eedef5cd1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="custom-image"
          src="https://i.pinimg.com/originals/1a/70/e3/1a70e3c1ff1233983508a76eedef5cd1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="custom-image"
          src="https://i.pinimg.com/originals/1a/70/e3/1a70e3c1ff1233983508a76eedef5cd1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;