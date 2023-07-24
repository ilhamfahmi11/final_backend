const UsersModel = require('../models/usersmodel');

// Create a new User
async function createUsers(req, res) {
  try {
    const { name, email, gender } = req.body;
    const user = new UsersModel({ name, email, gender });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the User' });
  }
}

// Get all User
async function getAllUsers(req, res) {
  try {
    const user = await UsersModel.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user' });
  }
}

// Get a specific user by ID
async function getUsersById(req, res) {
  try {
    const { id } = req.params;
    const user = await UsersModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user' });
  }
}

// Update a user
async function updateUsers(req, res) {
  try {
    const { id } = req.params;
    const { name, email, gender} = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { name, email, gender},
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the User' });
  }
}

// Delete a User
async function deleteUsers(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await UsersModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the User' });
  }
}

module.exports = {
  createUsers,
  getAllUsers,
  getUsersById,
  updateUsers,
  deleteUsers
};
