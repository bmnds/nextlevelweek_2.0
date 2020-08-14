import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

function Input({ name, label, ...props }: InputProps) {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} autoComplete="off" {...props} />
        </div>
    )
}

export default Input