import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"; //very similar to connect() reduxForm == formreducer

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions'

class PostsNew extends Component {
    renderField(field) { //field represents single input/peice of state


        //error style here
        // const className = `form-group ${field.meta.touch && field.meta.error ? 'has-error' : ''}`;

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        // return (
        //     <div className={`form-group has-danger`}>
        //         <label htmlFor="">{field.label}</label>
        //         <input className={`form-control`}
        //             // onChange={field.input.onChange}
        //             // onFocus={field.input.onFocus}
        //             // onBlur={field.input.onBlur}
        //                type={`text`}
        //                {...field.input} //object hold bunch of differnt properties like above
        //         />
        //         <div className={`text-help`}>
        //             {field.meta.touched ? field.meta.error : ''}
        //         </div>
        //     </div>
        // )

        return (
            <div className={className}>
                <label htmlFor="">{field.label}</label>
                <input className={`form-control`}
                    // onChange={field.input.onChange}
                    // onFocus={field.input.onFocus}
                    // onBlur={field.input.onBlur}
                       type={`text`}
                       {...field.input} //object hold bunch of differnt properties like above
                />
                <div className={`text-help`}>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        //this === component
        // console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    //reduxform handles state of form , values and validation
    //doenst not do posting data to backend server
    render() {
        const {handleSubmit} = this.props; //coming from reduxform function

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        // labelToShow={`Title`}
                        // fieldTitle={`Title`}
                        label={`Title For Post`}
                        name={`title`}
                        component={this.renderField} //refernce to function
                    />
                    <Field
                        label={`Categories`}
                        name={`categories`}
                        component={this.renderField} //reference to function not calling it instantly
                    />
                    <Field
                        label={`Post Content`}
                        name={`content`}
                        component={this.renderField}
                    />
                    <button type={`submit`} className={`btn btn-primary`}>Submit</button>
                    <Link to={`/`} className={`btn btn-danger`}>Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) { //bydefault argument is values
    // console.log(values) -> {title : 'asdf', categories : 'asdf', content: 'asdf' }

    const errors = {};

    //validate the inputs from 'values'
    // if (!values.title.length < 3) {
    //     error.title = "Title must be at least 3 characters"
    // }

    if (!values.title) { //name property
        errors.title = "Enter a title!";
    }

    // if (!values.title || values.title.length < 3) {
    //     errors.title = "Enter a title that is at least 3 characters!";
    // }

    if (!values.categories) {  //name property
        errors.categories = "Enter some categories"
    }

    if (!values.content) {  //name property
        errors.content = "Enter some content please"
    }

    //if errors object is empty, the form is fine to submit
    //if errors has *any* properties, redux form assumes form is invalid
    return errors; //reduxform will check here
}

export default reduxForm({
    // validate: validate,
    validate,
    form: 'PostsNewForm' //name of the form must be unique (ex:signInForm )
})(
    connect(null, {createPost: createPost})(PostsNew)
);