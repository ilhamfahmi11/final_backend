// const isAuthenticated = require("../middleware/authmiddleware");
const express = require('express');
const router = express.Router();
const {
  createUsers,
  getAllUsers,
  getUsersById,
  updateUsers,
  deleteUsers
} = require('../controller/userscontroller');

// Create a new Users
router.post('/users', createUsers);

// Get all users
router.get('/users', getAllUsers);

// Get a specific users by ID
router.get('/users/:id', getUsersById);

// Update a users
router.put('/users/:id', updateUsers);

// Delete a users
router.delete('/users/:id', deleteUsers);

module.exports = router;

