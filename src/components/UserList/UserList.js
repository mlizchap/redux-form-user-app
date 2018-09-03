import React, { Component } from 'react';

import User from '../User/User';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {this.props.users.map(user => {
                    <User
                        key={user.id} 
                        username={user.username}
                        email={user.email}
                        movie={user.favMovie}
                        book={user.favBook}
                    />
                })}
            </div>
        );
    }
}

export default UserList;