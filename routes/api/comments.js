const router = require('express').Router()
const dataController = require('../../controllers/api/comments')
const checkUserStatus = require('../../config/checkUserStatus')

// Index for comments
router.get('/', dataController.index)
// Delete a comment
router.delete('/:id', checkUserStatus, dataController.delete)
// Update a comment
router.put('/:id', checkUserStatus, dataController.update)
// Create a comment
router.put('/', checkUserStatus, dataController.create)
// Show a comment
router.put('/:id', dataController.show)

module.exports = router