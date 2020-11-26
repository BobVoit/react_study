import React from "react";
import s from './FormsControls.module.css';

const FormsControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            <div>
            {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
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