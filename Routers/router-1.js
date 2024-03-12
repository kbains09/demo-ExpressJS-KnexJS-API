// router names to be renamed as per team agreement

const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/warehouses', async (req, res) => {
  try {
    const warehouses = await knex('warehouses').select('*');
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
