import db from '../config/database'
import md5 from 'md5'

class UsersController {
    static list(request, response){
        let sql = `select 
                        users.*, 
                        companies.name AS companyName,
                        companies.legal_name AS companyLegalName,
                        companies.email AS companyEmail,
                        companies.phone AS companyPhone,
                        companies.address AS companyAddress,
                        companies.create_at AS companyCreateAt,
                        companies.updated_at AS companyUpdateAt
                    from 
                        users 
                        inner join companies on companies.id = users.company_id 
                    order by 
                        users.id asc`
        db.query(sql)
        .then(results => {
            response.status(200).json(results.rows)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static add(request, response){
        const { company_id, full_name, phone, age, email, position, address } = request.body
        const sql = 'INSERT INTO users (company_id, full_name, phone, age, email, position, address, create_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
        const params = [company_id, full_name, phone, age, email, position, address, 'now()', 'now()']        

        db.query(sql, params)
        .then(results => {            
            response.status(200).send(`User added with ID: ${results.insertId}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static view(request, response){
        const id = request.params.id
        const sql = `select 
                        users.*, 
                        companies.name AS companyName,
                        companies.legal_name AS companyLegalName,
                        companies.email AS companyEmail,
                        companies.phone AS companyPhone,
                        companies.address AS companyAddress,
                        companies.create_at AS companyCreateAt,
                        companies.updated_at AS companyUpdateAt
                    from 
                        users 
                        inner join companies on companies.id = users.company_id 
                    where 
                        users.id = $1`
        
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
        const sql = "DELETE FROM users WHERE id = $1"
      
        db.query(sql, [id])
        .then(results => {            
            response.status(200).send(`User deleted with ID: ${id}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static edit(request, response) {
        const id = request.params.id
        const { company_id, full_name, phone, age, email, position, address } = request.body
        const sql = "UPDATE users SET company_id = $1, full_name = $2, phone = $3, age = $4, email = $5, position = $6, address = $7, updated_at = $8 WHERE id = $9"
        const params = [company_id, full_name, phone, age, email, position, address, 'now()', id]        

        db.query(sql, params)
        .then(results => {            
            response.status(200).send(`User modified with ID: ${id}`)
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }

    static token(request, response) {
        const id = request.params.id        
        const sql = `select 
                        MD5(users.id::text) as id
                    from 
                        users                         
                    where 
                        users.id = $1`
        
        db.query(sql, [id])
        .then(results => {            
            if(results.rows[0]) {
                let token = md5(results.rows[0].id)
                const sqlUpdate = "UPDATE users SET token = $1 WHERE id = $2"
                db.query(
                    sqlUpdate, [token, id], (error, results) => {
                        if (error) {
                            response.status(500).json({'error': error.message});
                            return;
                        }                    
                    response.status(200).json({token})
                  }
                )                
            } else {
                response.status(400).json({token: 'Token not provided'})
            }
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
    }
    
}

export default UsersController
