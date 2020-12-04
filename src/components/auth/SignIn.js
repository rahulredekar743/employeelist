import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {browserHistory} from "react-router";
import * as actions from '../../actions';

class SignIn extends Component {
    handleSubmit(formProps) {
        this.props.signInUser(formProps)
        console.log("form props: ", formProps);
        browserHistory.push('/EmployeeList');
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className={`alert alert-danger`}>
                    <strong>Opps!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }


    render() {
        const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <fieldset className={`form-group`}>
                        <label>Email: </label>
                        <input className={`form-control`} {...email}/>
                        {
                            email.touched && email.error &&
                            <div className={`error`}>
                                {email.error}
                            </div>
                        }
                    </fieldset>
                    <fieldset className={`form-group`}>
                        <label>Password: </label>
                        <input className={`form-control`} {...password}/>
                        {
                            password.touched && password.error &&
                            <div className={`error`}>
                                {password.error}
                            </div>
                        }
                    </fieldset>
                    {this.renderAlert()}
                    <button
                        type={`submit`}
                        className={`btn btn-primary`}>
                        Sign Up!
                    </button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
    const errors = {};

    if (formProps.email != 'abc@gmail.com') {
        errors.email = "Email not valid"
    }

    if (formProps.password != '123') {
        errors.password = "Password not valid"
    }

    if (!formProps.email) {
        errors.email = 'Please enter an email'
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password'
    }


    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password'],
    validate: validate
}, mapStateToProps, actions)(SignIn);