import React, { Component } from 'react';

import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <UserForm />
            </div>
        );
    }
}

export default App;