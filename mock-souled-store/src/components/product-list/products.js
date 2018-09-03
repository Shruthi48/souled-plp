import React from 'react';
import './product-list.css';

export default class Product extends React.Component {
    hover = () => {
        const element = document.getElementById(this.props.productId)
        element.setAttribute('src', this.props.productImageZoomed);
    }

    hoverOut = () => {
        const element = document.getElementById(this.props.productId)
        element.setAttribute('src', this.props.productImage);
    }

    render() {
        return (
            <div >
              <div className="product-image">
                 <img src={this.props.productImage} id={this.props.productId} alt="product-list" onMouseOver={e => this.hover()} onMouseLeave={this.hoverOut}></img>
                 <div className="product-name">{this.props.productName}</div>
              </div>
              <div className="product-details">
              <div className="product-category"> T-Shirts</div>
              <div className="product-price">Rs.{this.props.productPrice}</div>
              </div>
            </div>
        )
    }
}