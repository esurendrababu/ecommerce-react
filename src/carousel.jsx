import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css'; // Ensure this path is correct

const Carousels = () => {
  return (
    <Carousel className="custom-carousel" id="custom-carousel">
      <Carousel.Item>
        <img  id="car"
          className="d-block w-100 carousel-image"
          src="https://i.ytimg.com/vi/dm81YmIyBGU/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id="carheader">First slide label</h3>
          <p id="pcar">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="car"
          className="d-block w-100 carousel-image"
          src="https://static.vecteezy.com/system/resources/previews/000/558/582/large_2x/vector-banner-sale-special-offer-abstract-purple-and-yellow-color-background-design-concept.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 id="carheader">Second slide label</h3>
          <p id="pcar">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="car"
          className="d-block w-100 carousel-image"
          src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/laptop-new-arrival-sales-banner-1-5fe0c47813869.png"
          alt="Third slide"/>
        <Carousel.Caption>
          <h3 id="carheader">Third slide label</h3>
          <p id="pcar">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
