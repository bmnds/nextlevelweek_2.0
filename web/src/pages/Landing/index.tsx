import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'

import './styles.css'
import logoSvg from '../../assets/images/logo.svg'
import landingSvg from '../../assets/images/landing.svg'
import studySvg from '../../assets/images/icons/study.svg'
import teachSvg from '../../assets/images/icons/teach.svg'
import purpleHeartSvg from '../../assets/images/icons/purple-heart.svg'


function Landing() {
    const [totalConnections, setTotalConnections] = useState(-1)

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoSvg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingSvg} className="hero-image" 
                    alt="Plataforma de estudos" />
                <div className="buttons-container">
                    <Link to="study" className="study">
                        <img src={studySvg} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="beforeTeach" className="teach">
                        <img src={teachSvg} alt="Lecionar" />
                        Lecionar
                    </Link>
                </div>
                <div className="total-connections">
                    <span>
                        Total de {totalConnections} conexões já realizadas
                        <img src={purpleHeartSvg} alt="Coração roxo" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Landing