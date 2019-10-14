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

        db.query(sql, [token], (error, results) => {
            if (error) {
                response.status(500).json({'error': error.message});
                return;
            }

            if(results.rows[0]) {
                return next();
            } else {                
                res.status(500).send(`Authorization token not valid`)
            }
        })
        
    }
};
module.exports = middleware;