import { Router } from 'express'
import CompaniesController from '../controllers/CompaniesController'
import UsersController from '../controllers/UsersController'

const router = new Router()
const isLoggedIn = require('./middlewares').isLoggedIn

/**
 * Get the registered companies, require authorization token
 */
router.get('/companies', isLoggedIn, CompaniesController.index)

/**
 * Create a new company
 */
router.post('/companies', CompaniesController.add)

/**
 * Get company details, require authorization token
 */
router.get('/companies/:id', isLoggedIn, CompaniesController.view)

/**
 * Deleted company, require authorization token
 */
router.delete('/companies/:id', isLoggedIn, CompaniesController.delete)

/**
 * Update company, require authorization token
 */
router.put('/companies/:id', isLoggedIn, CompaniesController.edit)

/**
 * Filter company with created_at, require authorization token
 * Param Format Y-m-d
 */
router.get('/companies/filter/:date', isLoggedIn, CompaniesController.filter)

/**
 * Get the registered users, require authorization token
 */
router.get('/users', isLoggedIn, UsersController.index)

/**
 * Create a new company
 */
router.post('/users', UsersController.add)

/**
 * Get user details, require authorization token
 */
router.get('/users/:id', isLoggedIn, UsersController.view)

/**
 * Deleted users, require authorization token
 */
router.delete('/users/:id', isLoggedIn, UsersController.delete)

/**
 * Update users, require authorization token
 */
router.put('/users/:id', isLoggedIn, UsersController.edit)

/**
 * User token authentication
 */
router.get('/users/token/:id', UsersController.token)

export default router
