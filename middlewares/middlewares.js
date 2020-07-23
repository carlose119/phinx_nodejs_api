import db from '../config/database'

const middleware = {    
    isLoggedIn : function (req, res, next) {
        const token = req.headers['authorization'];        
        const sql = `select 
                        token
                    from 
                        users                       
                    where
                        token = $1`

        db.query(sql, [token])
        .then(results => {            
            if(results.rows[0]) {
                return next();
            } else {                
                res.status(500).send(`Authorization token not valid`)
            }
        })
        .catch(error => {
            response.status(400).json({'error': error.message});
        })
        
    }
};
module.exports = middleware;