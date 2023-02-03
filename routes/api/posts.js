const router = require('express').Router()
const dataController = require('../../controllers/api/posts')
const checkUserStatus = require('../../config/checkUserStatus')

// Show a post. We don't need to check user status here since we want anyone to be able to browse posts
router.get('/:id', dataController.show)
// Index for posts. We don't need to check user status here since we want anyone to be able to browse posts
router.get('/', dataController.index)
// Delete a post. We need to verify the user attempting to delete a post is the sub owner
router.delete('/:id', checkUserStatus, dataController.verifyAgainstDB, dataController.delete)
// Update a post. We need to verify the user attempting to update a post is the sub owner
router.put('/:id', checkUserStatus, dataController.update)
// Create a post. We need to verify the user is logged in when attempting to create a new post
router.post('/', checkUserStatus, dataController.create)

module.exports = router
