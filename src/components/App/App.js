import React, { Component } from 'react';

import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';

class App extends Component {
    render() {
        return (
            <div>
                <UserForm />
                <UserList />
            </div>
        );
    }
}

export default App;