const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/users');

// GET all Users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET all Users
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ADD a new user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({name, email, password});
  await user.save();
  res.json({status: 'User Saved'});
});

// UPDATE a new user
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = {name, email, password};
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({status: 'User Updated'});
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({status: 'User Deleted'});
});

module.exports = router;