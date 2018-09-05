import React, { Component } from 'react';
import { connect } from 'react-redux'

import User from '../User/User';

class UserList extends Component {
    render() {
        console.log("test")
        return (
            <div className="component-userlist">
                {(this.props.users) ? this.props.users.map(user=> {
                    console.log(user.id)
                    return (
                        <User 
                            key={user.id} 
                            username={user.username}
                            email={user.email}
                            movie={user.favMovie}
                            book={user.favBook}
                        />
                    )
                }) : <div /> }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users } 
}

export default connect(mapStateToProps)(UserList);