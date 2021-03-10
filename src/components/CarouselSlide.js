import React from 'react';
import image from '../IMG_4402.jpg';
import moose from '../Moose.jpg';

function CarouselSlide() {
    return (

<div>
  <div style={{
    backgroundImage: {image},
    backgroundRepeat: 'no-repeat',
    width:'250px'
  }}>
    <h1>Hello World</h1>
  </div>
</div>

    )
}

export default CarouselSlide;
