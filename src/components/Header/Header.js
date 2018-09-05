import React, { Component } from 'react';

import './Header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header-component">
                <h1>User Form App</h1>  
            </div>
        );
    }
}

export default Header;