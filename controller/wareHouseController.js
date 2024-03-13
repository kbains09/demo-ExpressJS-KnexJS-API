const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
  try {
    const data = await knex.select("*").from('warehouses');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Users: ${err}`)
  }
}


const selectedId = async (req, res) => {
    try {
      const wareHouseID = await knex.select("*").from('warehouses')
        .where({ id: req.params.id });
         console.log(wareHouseID)
      if (wareHouseID.length === 0) {
        return res.status(404).json({
          message: `User with ID ${req.params.id} not found` 
        });
    }
    const wareHouseData = wareHouseID[0];
    res.json(wareHouseData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with ID ${req.params.id}`,
    });
  }
};

const updateWarehouse = async (req, res) => {
  try {
    const wareHouse = await knex.select("*").where({ id: req.params.id }).update(req.body);
    console.log("update to ", wareHouse);
    res.status(200).json(wareHouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const wareHouse = await knex('warehouses').insert(req.body);
    res.status(201).json(wareHouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWarehouse = async (req, res) => {
  try {
    await knex('warehouses').where({ id: req.params.id }).del();
    res.status(200).json({
      success: true,
      data: {
        message: `Warehouse with ID ${req.params.id} successfully deleted.`
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: 'INTERNAL_SERVER_ERROR'
      }
    });
  }
}


module.exports = {
    index: index,
    selectedId : selectedId,
    updateWarehouse: updateWarehouse,
    createWarehouse: createWarehouse,
    deleteWarehouse: deleteWarehouse,

}