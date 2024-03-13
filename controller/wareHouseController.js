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

module.exports = {
    index: index,
    selectedId : selectedId,

}