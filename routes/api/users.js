const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const checkUserStatus = require('../../config/checkUserStatus')

// New account route
router.post('/', dataController.create, apiController.auth)
// Login route
router.post('/login', dataController.login, apiController.auth)
// Token check route
router.get('/check-token', checkUserStatus, checkToken)
// Update info route
router.put('/:id', dataController.update, apiController.auth)

module.exports = router
