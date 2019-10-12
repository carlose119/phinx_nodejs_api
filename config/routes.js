import { Router } from 'express'
import CompaniesController from '../controllers/CompaniesController'

const router = new Router()

// Get the registered companies
router.get('/companies', CompaniesController.index)

// Create a new company
router.post('/companies', CompaniesController.add)

// Get company details
router.get('/companies/:id', CompaniesController.view)

// Deleted company
router.delete('/companies/:id', CompaniesController.delete)

// Update company
router.put('/companies/:id', CompaniesController.edit)

export default router
