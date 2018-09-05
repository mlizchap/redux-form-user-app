import React, { Component } from 'react';

export default (props) => {
    return (
        <div className="component-user">
            <h2 className="component-user__username">{props.username}</h2>
            <p>Email: <span className="component-user__email">{props.email}</span></p>
            <p>Favorite movie: <span className="component-user__favMovie">{props.movie}</span></p>
            <p>Favorite book: <span className="component-user__favBook">{props.book}</span></p>
        </div>
    )
}