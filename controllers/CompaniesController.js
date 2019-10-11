'use strict'
import db from '../config/database'

class CompaniesController {
    static index(req, res){
        var sql = "select * from companies"
        db.all(sql, (err, companies) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json(companies)
          });
    }

    static store(req, res){
        const { name, legal_name, email, phone, address } = req.body
        const SQL = 'INSERT INTO companies (name, legal_name, email, phone, address, create_at, upated_at) VALUES (?,?,?,?,?,?,?)'
        const params = [name, legal_name, email, phone, address, "2019-10-11 17:29:00", "2019-10-11 17:29:00"]        
        db.run(SQL, params, function (err) {
            if (err){
                res.status(500).json({'error': err.message})
                return;
            }
            req.body.id = this.lastID
            res.json({
                'company': req.body
            })
        })
    }

    static details(req, res){
        var sql = "select * from companies where id = ?"
        
        db.get(sql, req.params.id, (err, company) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                company
            })
        });
    }
}

export default CompaniesController
