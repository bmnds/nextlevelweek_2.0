import React from 'react'

import {Link} from 'react-router-dom'

import './styles.css'

function TeacherModal() {
    return (
        <div id="teacher-modal">
            <div id="teacher-modal-content" className="container">
                <header>
                    <div className="header-container">
                        <strong>Quer ser um Proffy?</strong>
                        <h3>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</h3>
                    </div>
                </header>
                
                <main>
                    <Link to="teach">
                        <button type="button">Tudo bem</button>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default TeacherModal