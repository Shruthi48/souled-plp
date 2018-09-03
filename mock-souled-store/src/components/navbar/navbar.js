import React from 'react';
import './nav.css';

const navbarList = [
    'SHOP',
    'OFFICIAL MERCH',
    'ARTISTS',
    'SOULED ARMY'
]


export default class Navbar extends React.Component {

    getNavList = () => {
        return navbarList.map( (item, index) => {
            return (
                <li key={item} className="nav-list-item"> {item} </li>
            )
        });
    }
    render() {
        return (
            <div className="nav-container"> 
              <div className="track-order">
                <div className="App-logo"></div>
              </div>
              <ul className="nav-list">
              {this.getNavList()}
                </ul>
            </div>
        )
    }
}