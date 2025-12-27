const express = require('express');
const router = express.Router();

//GET /api/workouts - toate workout-urile
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Get all workout programs',
      data: [],
      //filtre pt mai tarziu
      filters: {
        level: req.query.level,
        category: req.query.category,
        priceRange: req.query.priceRange
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//GET /api/workouts/:id - get workout cu id x
router.get('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Get workout program with ID: ${req.params.id}`,
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//POST /api/workouts - creeaza workout nou (eventual)
router.post('/', async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Create workout program (not implemented yet)',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//PUT /api/workouts/:id - update workout cu id x (eventual)
router.put('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Update workout program ${req.params.id} (not implemented yet)`,
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//DELETE /api/workouts/:id - sterge workout cu id x (eventual)
router.delete('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Delete workout program ${req.params.id} (not implemented yet)`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;