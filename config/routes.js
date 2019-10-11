import { Router } from 'express'
import CompaniesController from '../controllers/CompaniesController'

const router = new Router()

// Get the registered companies
router.get('/companies', CompaniesController.index)

// Create a new company
router.post('/companies', CompaniesController.store)

// Get company details
router.get('/companies/:id', CompaniesController.details)

export default router
