import { Router } from 'express'
import CompaniesController from '../controllers/CompaniesController'
import UsersController from '../controllers/UsersController'

const router = new Router()

/**
 * Get the registered companies
 */
router.get('/companies', CompaniesController.index)

/**
 * Create a new company
 */
router.post('/companies', CompaniesController.add)

/**
 * Get company details
 */
router.get('/companies/:id', CompaniesController.view)

/**
 * Deleted company
 */
router.delete('/companies/:id', CompaniesController.delete)

/**
 * Update company
 */
router.put('/companies/:id', CompaniesController.edit)

/**
 * Get the registered users
 */
router.get('/users', UsersController.index)

/**
 * Create a new company
 */
router.post('/users', UsersController.add)

/**
 * Get user details
 */
router.get('/users/:id', UsersController.view)

/**
 * Deleted users
 */
router.delete('/users/:id', UsersController.delete)

/**
 * Update users
 */
router.put('/users/:id', UsersController.edit)

export default router
