import React, { Fragment } from 'react';
import './product-list.css';
import Product from './products';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/getProductsActions';
import _ from 'lodash';

class ProductList extends React.Component {
    
    componentDidMount () {
      this.props.getProducts();
    }

    getProductsVal = () => {
        let grid = 3;
       return _.map(this.props.products, (item, index) => {
          grid++;
          if(grid === 7) {
              grid = 4;
           }
            return (
                <div className={`gridItem${grid}`} >
                <Product productImage={item.productImage}
                productImageZoomed={item.productImageZoomed} 
                productName={item.productName} 
                productPrice={item.productPrice}
                productId={item.id}
                />
                </div>
            )
        })
    }

    render() {
        return (
            <Fragment >
                {this.getProductsVal()}
            </Fragment>
        )
    }
}

export default connect( state => ({
  products: state.products
}), {getProducts})(ProductList);