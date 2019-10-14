'use strict'
import db from '../config/database'

class UsersController {
    static index(request, response){
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
        db.query(sql, (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(200).json(results.rows)
        })
    }

    static add(request, response){
        const { company_id, full_name, phone, age, email, position, address } = request.body
        const SQL = 'INSERT INTO users (company_id, full_name, phone, age, email, position, address, create_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
        const params = [company_id, full_name, phone, age, email, position, address, 'now()', 'now()']        
        db.query(SQL, params, (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(201).send(`User added with ID: ${results.insertId}`)
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
        
        db.query(sql, [id], (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(200).json(results.rows[0])
        })
    }

    static delete(request, response) {
        const id = request.params.id
        const sql = "DELETE FROM users WHERE id = $1"
      
        db.query(sql, [id], (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(200).send(`User deleted with ID: ${id}`)
        })
    }

    static edit(request, response) {
        const id = request.params.id
        const { company_id, full_name, phone, age, email, position, address } = request.body
        const sql = "UPDATE users SET company_id = $1, full_name = $2, phone = $3, age = $4, email = $5, position = $6, address = $7, updated_at = $8 WHERE id = $9"
        const params = [company_id, full_name, phone, age, email, position, address, 'now()', id]        

        db.query(
            sql, params, (error, results) => {
                if (error) {
                    response.status(500).json({'error': error.message});
                    return;
                }
            response.status(200).send(`User modified with ID: ${id}`)
          }
        )
    }
    
}

export default UsersController
