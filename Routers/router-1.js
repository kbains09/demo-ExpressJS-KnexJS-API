
const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
const wareHouseController = require('../controller/wareHouseController')


router.route('/warehouse').get(wareHouseController.index);
router.route('/:id').get(wareHouseController.selectedId);



module.exports = router;
