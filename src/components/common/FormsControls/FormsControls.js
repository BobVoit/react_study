import React from "react";
import s from './FormsControls.module.css';

const FormsControl = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "" )}>
            <div>
                
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
                <textarea {...input} {...props} />
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