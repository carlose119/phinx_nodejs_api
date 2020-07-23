import db from '../config/database'

class CompaniesController {
    static list(request, response){
        let sql = "select * from companies order by companies.name asc"
        db.query(sql)
        .then(results => {
            response.status(200).json(results.rows)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static add(request, response){
        const { name, legal_name, email, phone, address } = request.body
        const sql = 'INSERT INTO companies (name, legal_name, email, phone, address, create_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7)'
        const params = [name, legal_name, email, phone, address, 'now()', 'now()']        
        db.query(sql, params)
        .then(results => {            
            response.status(200).send(`Company added with ID: ${results.insertId}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static view(request, response){
        const id = request.params.id
        const sql = "select * from companies where id = $1"

        db.query(sql, [id])
        .then(results => {            
            response.status(200).json(results.rows[0])
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static deleteRegister(request, response) {
        const id = request.params.id
        const sql = "DELETE FROM companies WHERE id = $1"
      
        db.query(sql, [id])
        .then(results => {            
            response.status(200).send(`Company deleted with ID: ${id}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static edit(request, response) {
        const id = request.params.id
        const { name, legal_name, email, phone, address } = request.body
        const sql = "UPDATE companies SET name = $1, legal_name = $2, email = $3, phone = $4, address = $5, updated_at = $6 WHERE id = $7"
        const params = [name, legal_name, email, phone, address, 'now()', id]   

        db.query(sql, params)
        .then(results => {            
            response.status(200).send(`Company modified with ID: ${id}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static filter(request, response) {
        const date = request.params.date 
        let start = date + ' 00:00:00'
        let end = date + ' 23:59:59'       
        const sql = "select * from companies where create_at between $1 and $2 order by name asc"

        db.query(sql, [start, end])
        .then(results => {            
            response.status(200).json(results.rows)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }
    
}

export default CompaniesController
