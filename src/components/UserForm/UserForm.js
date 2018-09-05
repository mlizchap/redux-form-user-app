import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createUser } from '../../actions';
import './UserForm.scss';

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
        const errorClass = {
            border: '1px solid #e43972'
        }
        return (
            <div className="userform__field">
                <label>{field.label}</label>
                <input 
                    style={field.meta.touched && field.meta.error ? errorClass : null}
                    className="userform__field-input" 
                    type="text" 
                    {...field.input} 
                />
                { (field.meta.error && field.meta.touched) ? 
                    <div className="userform__field_error">{field.meta.error}</div> : <div>&nbsp;</div> 
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
        errors.email = "enter an email"
    }
    if (!values.favMovie) {
        errors.favMovie = "enter your favorite movie"
    }
    if (!values.favBook) {
        errors.favBook = "enter your favorite book"
    }
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'UserForm'
})(
    connect(null, { createUser })(UserForm)
)