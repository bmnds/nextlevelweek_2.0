import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedules', table => {
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
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedules')
}