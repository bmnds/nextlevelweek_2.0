import express from 'express'

import db from '../database/connection'
import { timeToMinutes } from '../utils'
import { QueryBuilder } from 'knex'

const ClassController = express.Router()

interface ScheduleItem {
    week_day: string,
    from: string,
    to: string
}

// Create Class and its Schedules
ClassController.post('/classes', async (req, res) => {
    const {
        name,
        avatar,
        bio,
        whatsapp,
        subject,
        cost,
        schedules
    } = req.body
    
    const trx = await db.transaction()
    
    try {
        const [user_id] = await trx('users').insert({
            name,
            avatar,
            bio,
            whatsapp
        })

        const [class_id] = await trx('classes').insert({
            subject,
            cost,
            user_id
        })

        const classSchedules = schedules.map((schedule: ScheduleItem) => {
            return {
                class_id,
                week_day: schedule.week_day,
                time_start: timeToMinutes(schedule.from),
                time_end: timeToMinutes(schedule.to)
            }
        })
        await trx('class_schedules').insert(classSchedules)
        
        await trx.commit()

        return res.status(201)
            .location(req.url+'/'+class_id)
            .end()
    } catch (err) {
        console.log(err)
        trx.rollback()

        return res.status(400).send({
            error: "The class creation failed"
        })
    }
})

ClassController.get('/classes', async (req, res) => {
    const {week_day, subject, time} = req.query

    if (!week_day || !subject || !time) {
        return res.status(422).send({
            error: "week_day, subject and time filters must be provided"
        })
    }

    const minutes = timeToMinutes(time as string)
    
    const classes = await db('classes')
        .select(['classes.*', 'users.*'])
        .join('users', 'classes.user_id', '=', 'users.id')
        .where('subject', 'like', `${subject}`)
        .whereExists(function() {
            this.select('id')
                .from('class_schedules')
                .whereRaw('class_id = `classes`.`id`')
                .where('week_day', `${week_day}`)
                .whereRaw(`${minutes} BETWEEN time_start AND time_end`)
        })

    if (classes.length == 0) {
        return res.status(404).send({
            error: "there are not classes for the given criteria"
        })
    }
    
    return res.send(classes)
})

export default ClassController