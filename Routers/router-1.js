const express = require('express');
const router = express.Router();
const wareHouseController = require('../controller/wareHouseController')


router.route('/').get(wareHouseController.index);
router.route('/:id').get(wareHouseController.selectedId);
router.route('/').post(wareHouseController.createWarehouse);
router.route('/:id').put(wareHouseController.updateWarehouse);
router.route('/:id').delete(wareHouseController.deleteWarehouse);



module.exports = router;
