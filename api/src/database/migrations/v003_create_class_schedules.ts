import Knex from 'knex'

exports.up = async (knex: Knex) =>
    knex.schema.createTable('class_schedules', table => {
        table.integer('id').primary()

        table.string('week_day').notNullable()
        table.integer('time_start').notNullable()
        table.integer('time_end').notNullable()

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
    })

exports.down = async (knex: Knex) =>
    knex.schema.dropTable('class_schedules')