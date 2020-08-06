import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-study">
            <div id="page-study-content" className="container">
                <PageHeader title="Estas são as proffys disponíveis">
                    <form id="search-teachers">
                        <div className="input-block">
                            <label htmlFor="subject">Matéria</label>
                            <input type="text" id="subject"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="week_day">Dia da semana</label>
                            <input type="text" id="week_day"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="time">Hora</label>
                            <input type="text" id="time"/>
                        </div>
                    </form>
                </PageHeader>

                <main>
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                </main>
            </div>
        </div>
    )
}

export default TeacherList