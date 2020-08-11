import Knex from 'knex'

import knexfile from './knexfile'

const db = Knex(knexfile)

export default db