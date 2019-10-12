const { Client } = require('pg')

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'phinx_nodejs_api',
    password: '12345',
    port: 5432,
  }

const db = new Client(connectionData)

db.connect()

db.query(`CREATE TABLE IF NOT EXISTS companies (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(255), 
            legal_name VARCHAR(255), 
            email VARCHAR(255), 
            phone VARCHAR(255), 
            address VARCHAR(255), 
            create_at timestamp, 
            upated_at timestamp)`
        )
    .then(response => {
        console.log('Init Table Companies')
    })
    .catch(err => {
        console.log('Error Init Table Companies:' + err.message)
    })

db.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY, 
        company_id INT4, 
        full_name VARCHAR(255), 
        phone VARCHAR(255), 
        age INT4, 
        email VARCHAR(255),         
        position VARCHAR(255), 
        address VARCHAR(255), 
        create_at timestamp, 
        upated_at timestamp,
        FOREIGN KEY (company_id) REFERENCES companies (id))`
    )
    .then(response => {
        console.log('Init Table users')
    })
    .catch(err => {
        console.log('Error Init Table users:' + err.message)
    })

export default db