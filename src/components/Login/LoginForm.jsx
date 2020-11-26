import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';

// const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field validate={[required, ]} 
                placeholder={"Email"} name={"email"} component={Input} />
            </div>
            <div>
                <Field validate={[required, ]} 
                type={"password"} placeholder={"Password"} name={"password"} component={Input} />
            </div>
            <div>
                <Field  
                type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "login"
})(LoginForm);