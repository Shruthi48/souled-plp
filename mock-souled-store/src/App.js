import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Filters from './components/filters/filters';
import ProductList from './components/product-list/product-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="grid">
      <div class="gridItem1">
          <NavBar />
      </div>
      <div class="gridItem2">
          <Carousel />
      </div>
      <div class="gridItem3">
       <Filters/>
      </div>
       <ProductList/>
    </div>
    );
  }
}

export default App;
