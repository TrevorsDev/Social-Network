const router = require('express').Router();
const {
  getReaction,
  getSingleReaction,
  createReaction,
  updateReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getReaction).post(createReaction);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleReaction)
  .put(updateReaction)
  .delete(deleteReaction);

module.exports = router;