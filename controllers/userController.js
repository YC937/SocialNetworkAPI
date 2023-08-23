const { User, Thought } = require("../models");

module.exports = {
  //Get all users
  getUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //Get single user
  getSingleUser(req, res) {

  },
  //create a user
  createUser(req, res) {

  },
  //update a user
  updateUser(req, res) {

  },
  //delete a user
  deleteUser(req, res) {

  },
  //add a friend
  addFriend(req, res) {
    
  },
  //delete a friend
  removeFriend(req, res) {

  },
};
