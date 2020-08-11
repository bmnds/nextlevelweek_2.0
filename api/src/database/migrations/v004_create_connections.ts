import Knex from 'knex'

exports.up = async (knex: Knex) =>
    knex.schema.createTable('connections', table => {
        table.integer('id').primary()

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
    })

exports.down = async (knex: Knex) =>
    knex.schema.dropTable('connections')