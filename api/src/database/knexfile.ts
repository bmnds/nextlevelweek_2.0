import path from 'path'

let connection
if (process.env.NODE_ENV === 'test') {
    connection = ':memory:'
} else {
    connection = {
        filename: path.resolve(__dirname, 'database.sqlite')
    }
}

const knexConfig = {
    client: 'sqlite3',
    connection: connection,
    migrations: {
        directory: path.resolve(__dirname, 'migrations')
    },
    useNullAsDefault: true,
}

// needed to be able to run via CLI `$ yarn migrate`
module.exports = knexConfig
// needed to be able to run jest tests with database setup and teardown
export default knexConfig