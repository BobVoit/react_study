import React from "react";
import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormsControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    // return <FormsControl {...props} element={textarea}></FormsControl>;
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    // return <FormsControl {...props}></FormsControl>;
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


export const createField = (placeholder, name, validators, component, props = {}, text="") => (
    <div>
        <Field validate={validators} 
        placeholder={placeholder} name={name} component={component} {...props} /> {text}
    </div>
)
