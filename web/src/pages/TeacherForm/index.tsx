import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'

import warningIconSvg from '../../assets/images/icons/warning.svg'

function TeacherForm() {
    return (
        <div id="page-teach">
            <div id="page-teacher-form" className="container">
                <PageHeader 
                    title="Que incrível que você quer dar aulas" 
                    description="O primeiro passo é preencher o formulário de inscrição" />
                
                <main>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="fullname" label="Nome completo" />
                        <Input type="url" name="avatar" label="Avatar" />
                        <Input type="tel" name="whatsapp" label="Whatsapp" 
                            pattern="\([0-9]{2}\)" />
                        <Textarea name="bio" label="Biografia" />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria" 
                            options={[
                                {value:"1", description:"Educação Financeira"},
                                {value:"2", description:"Fazendo fornuna com ações"},
                                {value:"3", description:"Introdução aos fundos de investimento imobiliário"},
                                {value:"4", description:"Guia prático Risco vs Retorno"}
                            ]} />
                        <Input name="cost" label="Custo da hora por aula" 
                            type="number" min="10" max="100" />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button">
                                + Novo horário
                            </button>
                        </legend>
                        
                        <div className="schedule-item">

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
                            <Input type="time" name="from_time" label="Das" />
                            <Input type="time" name="to_time" label="Até" />

                        </div>
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIconSvg} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="button">
                            Salvar cadastro
                        </button>
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default TeacherForm