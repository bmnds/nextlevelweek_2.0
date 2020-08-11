import Knex from 'knex'

exports.up = async (knex: Knex) =>
    knex.schema.createTable('classes', table => {
        table.increments('id').primary()

        table.string('subject').notNullable()
        table.decimal('cost', 5, 2).notNullable()

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
    })

exports.down = async (knex: Knex) => 
    knex.schema.dropTable('classes')