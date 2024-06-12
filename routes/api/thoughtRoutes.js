const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction

} = require('../../controllers/thoughtControllers.js');

// /api/courses
router.route('/').get(getAllThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

