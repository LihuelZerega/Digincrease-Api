const express = require('express');
const router = express.Router();
const StudiocahController = require('../controllers/studiocahController');

router.get('', StudiocahController.getAllModels);
router.get('/:id', StudiocahController.getModelById);
router.post('/', StudiocahController.createModel);
router.put('/:id', StudiocahController.updateModel);
router.delete('/:id', StudiocahController.deleteModel);

module.exports = router;
