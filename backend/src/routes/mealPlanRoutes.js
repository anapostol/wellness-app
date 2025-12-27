const express = require('express');
const router = express.Router();

//GET /api/meal-plans - get toate planurile
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Get all meal plans',
      data: [],
      filters: {
        goal: req.query.goal,
        dietType: req.query.dietType,
        calorieRange: req.query.calorieRange
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//GET /api/meal-plans/:id - get un singur meal plan
router.get('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Get meal plan with ID: ${req.params.id}`,
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//POST /api/meal-plans - creaaza plan nou (eventual)
router.post('/', async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Create meal plan (not implemented yet)',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//PUT /api/meal-plans/:id - update plan cu id x (eventual)
router.put('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Update meal plan ${req.params.id} (not implemented yet)`,
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

//DELETE /api/meal-plans/:id - sterge plan cu id x (eventual)
router.delete('/:id', async (req, res) => {
  try {
    res.json({
      success: true,
      message: `Delete meal plan ${req.params.id} (not implemented yet)`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;