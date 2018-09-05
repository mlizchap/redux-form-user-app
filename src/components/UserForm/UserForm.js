import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { createUser } from '../../actions';
import { connect } from 'react-redux';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.email = React.createRef()
    }
    onSubmit(values) {
        this.props.createUser(values);
        for (let i in values) {
            values[i] = ''
        }
    }
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input type="text" {...field.input} />
                {/* {console.log(field.meta.error)} */}
                { (field.meta.error && field.meta.touched) ? 
                    <div>{field.meta.error}</div> : null 
                }
            </div>
        )
    }
    render() {
        return (
            <form className="userform" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field autocomplete="off" label="Username:" name="username" component={this.renderField} />
                <Field  label="Email:" name="email" component={this.renderField} />
                <Field label="Favorite movie:" name="favMovie" component={this.renderField} />
                <Field label="Favorite book:" name="favBook" component={this.renderField} />
                <button type="submit" className="userform_submit-btn">submit</button>            
            </form>
        );
    }
}

function validate(values) {
    const errors = {}
    if (!values.username) {
        errors.username = "enter a username"
    }
    if (!values.email) {
        errors.email = "enter a username"
    }
    if (!values.favMovie) {
        errors.favMovie = "enter a username"
    }
    if (!values.favBook) {
        errors.favBook = "enter a username"
    }
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'UserForm'
})(
    connect(null, { createUser })(UserForm)
)