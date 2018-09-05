import React, { Component } from 'react';

import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="app-component">
                    <UserForm />
                    <UserList />
                </div>
            </div>
        );
    }
}

export default App;