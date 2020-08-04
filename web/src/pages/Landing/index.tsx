import React from 'react'

import './styles.css'
import logoSvg from '../../assets/images/logo.svg'
import landingSvg from '../../assets/images/landing.svg'
import studySvg from '../../assets/images/icons/study.svg'
import teachSvg from '../../assets/images/icons/teach.svg'
import purpleHeartSvg from '../../assets/images/icons/purple-heart.svg'

function Landing() {
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
                    <a href="" className="study">
                        <img src={studySvg} alt="Estudar" />
                        Estudar
                    </a>
                    <a href="" className="teach">
                        <img src={teachSvg} alt="Lecionar" />
                        Lecionar
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartSvg} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing