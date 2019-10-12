'use strict'
import db from '../config/database'

class CompaniesController {
    static index(request, response){
        let sql = "select * from companies order by companies.name asc"
        db.query(sql, (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(200).json(results.rows)
        })
    }

    static add(request, response){
        const { name, legal_name, email, phone, address } = request.body
        const SQL = 'INSERT INTO companies (name, legal_name, email, phone, address, create_at, upated_at) VALUES ($1,$2,$3,$4,$5,$6,$7)'
        const date = new Date()  
        const timestamp = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        const params = [name, legal_name, email, phone, address, timestamp, timestamp]        
        db.query(SQL, params, (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(201).send(`Company added with ID: ${results.insertId}`)
        })
    }

    static view(request, response){
        const id = request.params.id
        const sql = "select * from companies where id = $1"
        
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
        const sql = "DELETE FROM companies WHERE id = $1"
      
        db.query(sql, [id], (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }
            response.status(200).send(`Company deleted with ID: ${id}`)
        })
    }

    static edit(request, response) {
        const id = request.params.id
        const { name, legal_name, email, phone, address } = request.body
        const sql = "UPDATE companies SET name = $1, legal_name = $2, email = $3, phone = $4, address = $5, upated_at = $6 WHERE id = $7"
        const date = new Date()  
        const timestamp = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        const params = [name, legal_name, email, phone, address, timestamp, id]   

        db.query(
            sql, params, (error, results) => {
                if (error) {
                    response.status(500).json({'error': error.message});
                    return;
                }
            response.status(200).send(`Company modified with ID: ${id}`)
          }
        )
    }
    
}

export default CompaniesController
