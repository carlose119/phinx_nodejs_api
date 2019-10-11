import sqlite from 'sqlite3'

const DBSOURCE = `db_${process.env.NODE_ENV}.sqlite`

let db = new sqlite.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to SQLite')
        db.run(`CREATE TABLE companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            legal_name text, 
            email text, 
            phone text, 
            address text,
            create_at timestamp,
            upated_at timestamp
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO companies (name, legal_name, email, phone, address, create_at, upated_at) VALUES (?,?,?,?,?,?,?)'
                db.run(insert, ["Phinx","Phinx Lab CA","info@phix.com","12345678","Argentina", "2019-10-11 17:29:00", "2019-10-11 17:29:00"])
            }
        });
    }
})

export default db