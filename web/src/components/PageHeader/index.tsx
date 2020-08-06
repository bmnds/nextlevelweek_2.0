import React, { ReactNode } from 'react'

import { Link } from 'react-router-dom'

import logoSvg from '../../assets/images/logo.svg'
import backIconSvg from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
    children?: ReactNode
    title: string
}

function PageHeader(props: PageHeaderProps) {
    return (
        <header id="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIconSvg} alt="Voltar" />
                </Link>
                <img src={logoSvg} alt="Proffy" />
            </div>
            
            <div className="header-content">
                <strong>{props.title}</strong>

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader