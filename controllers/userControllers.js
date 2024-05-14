const { User } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    console.log('Hi');
    User.find({})
      // .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  async createUser(req, res) {
    console.log("Yoyo!");
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get a single user
  // createUser(req, res) {
  //   console.log('Bye');
  //   User.create(req.body)
  //     // .select('-__v')
  //     .then((dbUserData) => res.json(dbUserData))
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(400).json(err);
  //     });
  // }
};