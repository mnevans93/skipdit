const router = require('express').Router()
const dataController = require('../../controllers/api/subSkipdits')
const checkUserStatus = require('../../config/checkUserStatus')

// Show a sub. We don't need to check user status here since we want anyone to be able to browse subs
router.get('/:id', dataController.show)
// Index for subs. We don't need to check user status here since we want anyone to be able to browse subs
router.get('/', dataController.index)
// Delete a sub. We need to verify the user attempting to delete a sub is the sub owner
router.delete('/:id', checkUserStatus, dataController.verifyAgainstDB, dataController.delete)
// Update a sub. We need to verify the user attempting to update a sub is the sub owner
router.put('/:id', checkUserStatus, dataController.update)
// Create a sub. We need to verify the user is logged in when attempting to create a new sub
router.post('/', checkUserStatus, dataController.create)

module.exports = router
