import Knex from 'knex';

exports.up = async (knex: Knex) =>
    knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()
    })

exports.down = async (knex: Knex) => knex.schema.dropTable('users')