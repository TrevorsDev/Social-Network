const router = require('express').Router();
const {
  getAllUsers,
  // getSingleUser,
  createUser,
  // deleteUser,

} = require('../../controllers/userControllers');

// /api/students
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/students/:studentId
// router.route('/:userId').get(getSingleUser).delete(deleteUser);

// // /api/students/:studentId/assignments
// router.route('/:userId/thoughts').post(addthought);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;