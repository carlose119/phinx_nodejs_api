import { Router } from 'express'
import CompaniesController from '../controllers/CompaniesController'
import UsersController from '../controllers/UsersController'
import middlewares from '../middlewares/middlewares'

const isLoggedIn = middlewares.isLoggedIn
const router = new Router()

/**
 * @api {get} /companies List all companies
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Companies
 * @apiSuccess {Object[]} companies list
 * @apiSuccess {Number} companies.id companies id
 * @apiSuccess {String} companies.name companies name
 * @apiSuccess {String} companies.legal_name companies legal_name
 * @apiSuccess {String} companies.email companies email
 * @apiSuccess {String} companies.phone companies phone
 * @apiSuccess {String} companies.address companies address
 * @apiSuccess {Date} companies.created_at Register's date
 * @apiSuccess {Date} companies.updated_at Update's date 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "name": "Phinx",
 *      "legal_name": "Phinx Lab",
 *      "email": "info@phinx.com",
 *      "phone": "12345678",
 *      "address": "Buenos Aires, Argentica",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/companies', isLoggedIn, CompaniesController.list)

/**
 * @api {post} /companies Register a new company
 * @apiGroup Companies
 * @apiParamExample {json} Input
 *    {
 *      "name": "Phinx",
 *      "legal_name": "Phinx Lab",
 *      "email": "info@phinx.com",
 *      "phone": "12345678",
 *      "address": "Buenos Aires, Argentica"
 *    }
 * @apiSuccess Company added with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 Company added with ID: 1      
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.post('/companies', CompaniesController.add)

/**
 * @api {get} /companies/:id details companies
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Companies
 * @apiSuccess {Object[]} companies list
 * @apiSuccess {Number} companies.id companies id
 * @apiSuccess {String} companies.name companies name
 * @apiSuccess {String} companies.legal_name companies legal_name
 * @apiSuccess {String} companies.email companies email
 * @apiSuccess {String} companies.phone companies phone
 * @apiSuccess {String} companies.address companies address
 * @apiSuccess {Date} companies.created_at Register's date
 * @apiSuccess {Date} companies.updated_at Update's date 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "Phinx",
 *      "legal_name": "Phinx Lab",
 *      "email": "info@phinx.com",
 *      "phone": "12345678",
 *      "address": "Buenos Aires, Argentica",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }
 *  @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/companies/:id', isLoggedIn, CompaniesController.view)

/**
 * @api {delete} /companies/:id Delete a company
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Companies
 * @apiParam {Integer} id Companies id
 * @apiSuccess Company deleted with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 Company delete with ID: 1
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.delete('/companies/:id', isLoggedIn, CompaniesController.delete)

/**
 * @api {put} /companies/:id Update a company
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Companies
 * @apiParam {Integer} id Companies id
 * @apiParamExample {json} Input
 *    {
 *      "name": "Phinx",
 *      "legal_name": "Phinx Lab",
 *      "email": "info@phinx.com",
 *      "phone": "12345678",
 *      "address": "Buenos Aires, Argentica"
 *    }
 * @apiSuccess Company modified with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 Company modified with ID: 1
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.put('/companies/:id', isLoggedIn, CompaniesController.edit)

/**
 * @api {get} /companies/filter/:date List filter companies
 * @apiHeader {String} Authorization Users unique token 
 * @apiParam {date} date format yyyy-mm-dd
 * @apiGroup Companies
 * @apiSuccess {Object[]} companies list
 * @apiSuccess {Number} companies.id companies id
 * @apiSuccess {String} companies.name companies name
 * @apiSuccess {String} companies.legal_name companies legal_name
 * @apiSuccess {String} companies.email companies email
 * @apiSuccess {String} companies.phone companies phone
 * @apiSuccess {String} companies.address companies address
 * @apiSuccess {Date} companies.created_at Register's date
 * @apiSuccess {Date} companies.updated_at Update's date 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "name": "Phinx",
 *      "legal_name": "Phinx Lab",
 *      "email": "info@phinx.com",
 *      "phone": "12345678",
 *      "address": "Buenos Aires, Argentica",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/companies/filter/:date', isLoggedIn, CompaniesController.filter)

/**
 * @api {get} /users List all users
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Users
 * @apiSuccess {Object[]} users list
 * @apiSuccess {Number} users.id users id
 * @apiSuccess {Number} users.company_id users company_id
 * @apiSuccess {String} users.full_name users full_name
 * @apiSuccess {String} users.phone users phone
 * @apiSuccess {Number} users.age users age
 * @apiSuccess {String} users.email users email
 * @apiSuccess {String} users.position users position
 * @apiSuccess {String} users.address users address
 * @apiSuccess {String} users.token users token
 * @apiSuccess {Date} users.created_at Register's date
 * @apiSuccess {Date} users.updated_at Update's date
 * @apiSuccess {String} companyname companies name
 * @apiSuccess {String} companylegalname companies legal_name
 * @apiSuccess {String} companyemail companies email
 * @apiSuccess {String} companyphone companies phone
 * @apiSuccess {String} companyaddress companies address
 * @apiSuccess {Date} companycreateat Register's date
 * @apiSuccess {Date} companyupdateat Update's date  
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "company_id": 1,
 *      "full_name": "Carlos Eduardo Carrillo Perez",
 *      "phone": "04121588687",
 *      "age": 32,
 *      "email": "carlos.e119@gmail.com",
 *      "position": "Programador",
 *      "address": "Venezuela",
 *      "token": "28c8edde3d61a0411511d3b1866f0636",
 *      "create_at": "2019-10-12T19:37:45.050Z",
 *      "updated_at": "2019-10-12T19:55:10.560Z", *      
 *      "companyname": ""Phinx",",
 *      "companylegalname": ""Phinx Lab CA",",
 *      "companyemail": ""info@phix.com",",
 *      "companyphone": ""12345678",",
 *      "companyaddress": ""Buenos Aires, Argentina",",
 *      "companycreateat": "2019-10-11T21:29:00.000Z",
 *      "companyupdateat": "2019-09-12T18:44:42.000Z"
 *    }]
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/users', isLoggedIn, UsersController.list)

/**
 * @api {post} /users Register a new user
 * @apiGroup Users
 * @apiParamExample {json} Input
 *    {
 *      "company_id": 1,
 *      "full_name": "Carlos Eduardo Carrillo Perez",
 *      "phone": "04121588687",
 *      "age": 32,
 *      "email": "carlos.e119@gmail.com",
 *      "position": "Programador",
 *      "address": "Venezuela",
 *    }
 * @apiSuccess User added with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 User added with ID: 1
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.post('/users', UsersController.add)

/**
 * @api {get} /users/:id details user
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Users
 * @apiSuccess {Object[]} users list
 * @apiSuccess {Number} users.id users id
 * @apiSuccess {Number} users.company_id users company_id
 * @apiSuccess {String} users.full_name users full_name
 * @apiSuccess {String} users.phone users phone
 * @apiSuccess {Number} users.age users age
 * @apiSuccess {String} users.email users email
 * @apiSuccess {String} users.position users position
 * @apiSuccess {String} users.address users address
 * @apiSuccess {String} users.token users token
 * @apiSuccess {Date} users.created_at Register's date
 * @apiSuccess {Date} users.updated_at Update's date
 * @apiSuccess {String} companyname companies name
 * @apiSuccess {String} companylegalname companies legal_name
 * @apiSuccess {String} companyemail companies email
 * @apiSuccess {String} companyphone companies phone
 * @apiSuccess {String} companyaddress companies address
 * @apiSuccess {Date} companycreateat Register's date
 * @apiSuccess {Date} companyupdateat Update's date  
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "company_id": 1,
 *      "full_name": "Carlos Eduardo Carrillo Perez",
 *      "phone": "04121588687",
 *      "age": 32,
 *      "email": "carlos.e119@gmail.com",
 *      "position": "Programador",
 *      "address": "Venezuela",
 *      "token": "28c8edde3d61a0411511d3b1866f0636",
 *      "create_at": "2019-10-12T19:37:45.050Z",
 *      "updated_at": "2019-10-12T19:55:10.560Z", *      
 *      "companyname": ""Phinx",",
 *      "companylegalname": ""Phinx Lab CA",",
 *      "companyemail": ""info@phix.com",",
 *      "companyphone": ""12345678",",
 *      "companyaddress": ""Buenos Aires, Argentina",",
 *      "companycreateat": "2019-10-11T21:29:00.000Z",
 *      "companyupdateat": "2019-09-12T18:44:42.000Z"
 *    }
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/users/:id', isLoggedIn, UsersController.view)

/**
 * @api {delete} /users/:id Delete a user
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Users
 * @apiParam {Integer} id Users id
 * @apiSuccess User deleted with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 User delete with ID: 1
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.delete('/users/:id', isLoggedIn, UsersController.delete)

/**
 * @api {put} /users/:id Update a user
 * @apiHeader {String} Authorization Users unique token 
 * @apiGroup Users
 * @apiParam {Integer} id users id
 * @apiParamExample {json} Input
 *   {
 *      "company_id": 1,
 *      "full_name": "Carlos Eduardo Carrillo Perez",
 *      "phone": "04121588687",
 *      "age": 32,
 *      "email": "carlos.e119@gmail.com",
 *      "position": "Programador",
 *      "address": "Venezuela",
 *    }
 * @apiSuccess User modified with ID: 1
 * @apiSuccessExample {String} Response:
 *    HTTP/1.1 200 User modified with ID: 1
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.put('/users/:id', isLoggedIn, UsersController.edit)

/**
 * @api {get} /users/token/:id User token authentication
 * @apiGroup Users

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {      
 *      "token": "28c8edde3d61a0411511d3b1866f0636", *      
 *    }
 * @apiErrorExample {String} Error-Response:
 *    HTTP/1.1 500 Server Error
 *     {
 *       "error": "message"
 *     }
 */
router.get('/users/token/:id', UsersController.token)

export default router
