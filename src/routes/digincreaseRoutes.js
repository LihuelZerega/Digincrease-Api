const express = require('express');
const router = express.Router();
const DigincreaseController = require('../controllers/digincreaseController');

router.get('', DigincreaseController.getAllModels);
router.get('/:id', DigincreaseController.getModelById);
router.post('/', DigincreaseController.createModel);
router.put('/:id', DigincreaseController.updateModel);
router.delete('/:id', DigincreaseController.deleteModel);

module.exports = router;
