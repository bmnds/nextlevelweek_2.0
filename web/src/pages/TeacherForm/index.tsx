import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'

import warningIconSvg from '../../assets/images/icons/warning.svg'

function TeacherForm() {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: "SAB", from_time: "08:10", to_time: "23:59" }
    ])

    function addScheduleItem() {
        if (scheduleItems.length >= 7) { return }
        setScheduleItems([
            ...scheduleItems,
            { week_day: "", from_time: "", to_time: "" }
        ])
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

    }

    return (
        <div id="page-teach">
            <div id="page-teacher-form" className="container">
                <PageHeader 
                    title="Que incrível que você quer dar aulas" 
                    description="O primeiro passo é preencher o formulário de inscrição" />
                
                <main>
                  <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name} 
                                onChange={(e) => setName(e.target.value) } />
                        <Input type="url" name="avatar" label="Avatar" value={avatar} 
                                onChange={(e) => setAvatar(e.target.value) } />
                        <Input type="tel" name="whatsapp" label="Whatsapp" 
                                pattern="\([0-9]{2}\)" value={whatsapp} 
                                onChange={(e) => setWhatsapp(e.target.value) } />
                        <Textarea name="bio" label="Biografia" value={bio} 
                                onChange={(e) => setBio(e.target.value) } />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" label="Matéria" value={subject}
                            onChange={(e) => setSubject(e.target.value) }
                            options={[
                                {value:"1", description:"Educação Financeira"},
                                {value:"2", description:"Fazendo fornuna com ações"},
                                {value:"3", description:"Introdução aos fundos de investimento imobiliário"},
                                {value:"4", description:"Guia prático Risco vs Retorno"}
                            ]} />
                        <Input name="cost" label="Custo da hora por aula" 
                            type="number" min="10" max="100" value={cost}
                            onChange={ (e) => setCost(e.target.value) } />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        
                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">

                                    <Select 
                                        name="week_day" 
                                        label="Dia da Semana"
                                        defaultValue={scheduleItem.week_day}
                                        options={[
                                            {value:"SEG", description:"Segunda-feira"},
                                            {value:"TER", description:"Terça-feira"},
                                            {value:"QUA", description:"Quarta-feira"},
                                            {value:"QUI", description:"Quinta-feira"},
                                            {value:"SEX", description:"Sexta-feira"},
                                            {value:"SAB", description:"Sábado"},
                                            {value:"DOM", description:"Domingo"}
                                        ]} />
                                    <Input type="time" name="from_time" label="Das" 
                                            defaultValue={scheduleItem.from_time} />
                                    <Input type="time" name="to_time" label="Até" 
                                            defaultValue={scheduleItem.to_time} />

                                </div>
                            )
                        })}
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
                  </form>
                </main>
            </div>
        </div>
    )
}

export default TeacherForm