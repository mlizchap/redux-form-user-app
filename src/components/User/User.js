import React, { Component } from 'react';

import './User.scss';

export default (props) => {
    return (
        <div className="component-user">
            <h2 className="component-user__username">
                {props.username.toUpperCase()}
            </h2>
            <p>
                Email:
                <span className="component-user__email">
                    &nbsp; {props.email}
                </span>
            </p>
            <p>
                Favorite movie: 
                <span className="component-user__favMovie">
                    &nbsp; {props.movie}
                </span></p>
            <p>
                Favorite book: 
                <span className="component-user__favBook">
                    &nbsp; {props.book}
                </span>
            </p>
        </div>
    )
}