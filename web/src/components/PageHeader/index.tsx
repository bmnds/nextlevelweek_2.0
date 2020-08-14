import React, { ReactNode } from 'react'

import { Link } from 'react-router-dom'

import logoSvg from '../../assets/images/logo.svg'
import backIconSvg from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
    children?: ReactNode
    title: string
    description?: string
    showTopBar?: boolean
}

function PageHeader(props: PageHeaderProps) {
    return (
        <header id="page-header">
        { props.showTopBar &&
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIconSvg} alt="Voltar" />
                </Link>
                <img src={logoSvg} alt="Proffy" />
            </div>
        }  
            <div className="header-content">
                <strong>{props.title}</strong>

                { props.description && 
                    <p>{props.description}</p>
                }

                {props.children}
            </div>
        </header>
    )
}

PageHeader.defaultProps = {
    showTopBar: true
}

export default PageHeader