import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Input, createField } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';


// const maxLength10 = maxLengthCreator(10);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            { createField("Email", "email", [required], Input) }
            { createField("Password", "password", [required], Input, {type: "password"}) }
            { createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe") }
            { error && <div className={s.formSummaryError}>
                {error}
            </div> 
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "login"
})(LoginForm);