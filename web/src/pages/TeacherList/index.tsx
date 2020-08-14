import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList() {
    return (
        <div id="page-study">
            <div id="page-study-content" className="container">
                <PageHeader title="Estas são as proffys disponíveis">
                    <form id="search-teachers">
                        <Select 
                            name="subject" 
                            label="Matéria" 
                            options={[
                                {value:"1", description:"Educação Financeira"},
                                {value:"2", description:"Fazendo fornuna com ações"},
                                {value:"3", description:"Introdução aos fundos de investimento imobiliário"},
                                {value:"4", description:"Guia prático Risco vs Retorno"}
                            ]} />
                        <Select 
                            name="week_day" 
                            label="Dia da Semana" 
                            options={[
                                {value:"SEG", description:"Segunda-feira"},
                                {value:"TER", description:"Terça-feira"},
                                {value:"QUA", description:"Quarta-feira"},
                                {value:"QUI", description:"Quinta-feira"},
                                {value:"SEX", description:"Sexta-feira"},
                                {value:"SAB", description:"Sábado"},
                                {value:"DOM", description:"Domingo"}
                            ]} />
                        <Input type="time" name="time" label="Hora" />
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