const router = require('express').Router()
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller.js')

router.route('/').get(getAllThoughts).post(createThought)

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router