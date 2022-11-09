const express = require('express');
const router = express.Router();

// User Model
const Tutor = require('../models/tutors');

// GET all Tutors
router.get('/', async (req, res) => {
  const tutors = await Tutor.find();
  res.json(tutors);
});

// GET all Tutors
router.get('/:id', async (req, res) => {
  const tutor = await Tutor.findById(req.params.id);
  res.json(tutor);
});

// ADD a new tutor
router.post('/', async (req, res) => {
  const { name, email, description } = req.body;
  const tutor = new Tutor({name, email, description});
  await tutor.save();
  res.json({status: 'Tutor Saved'});
});

module.exports = router;