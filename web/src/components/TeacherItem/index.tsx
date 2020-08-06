import React from 'react'

import whatsappIconSvg from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/433506?s=460&u=29334cfd31a7664c7b60a4e74b15a324a50a9ed5&v=4" alt="Bruno Mendes" />
                <div>
                    <strong>Bruno Mendes</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusuasta das melhores tecnologias de química avançada.
                <br/> <br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIconSvg} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem