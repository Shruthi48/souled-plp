import React from 'react';
import './carousel.css';
import carousel from '../../images/carousel.jpg';
//<img src={logo2} className="App-logo" alt="logo" />

export default class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-container">
              <img src={carousel}  alt="logo" />
            </div>
        )
    }
}