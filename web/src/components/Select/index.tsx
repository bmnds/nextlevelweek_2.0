import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface OptionProps {
    value: string
    description: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string,
    options: Array<OptionProps>
}

function Select({ name, label, options, ...props }: SelectProps) {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} autoComplete="off" {...props}> 
                <option value="" disabled hidden>Selecione uma opção...</option>
                {options.map(option => {
                    return (
                        <option key={option.value} 
                                value={option.value}>
                            {option.description}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select