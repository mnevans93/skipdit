const router = require('express').Router()
const dataController = require('../../controllers/api/comments')
const checkUserStatus = require('../../config/checkUserStatus')

// Show a comment
router.get('/:id', dataController.show)
// Index for comments
router.get('/', dataController.index)
// Delete a comment
router.delete('/:id', checkUserStatus, dataController.verifyAgainstDB, dataController.delete)
// Update a comment
router.put('/:id', checkUserStatus, dataController.verifyAgainstDB, dataController.update)
// Create a comment
router.post('/', checkUserStatus, dataController.create)

module.exports = router
