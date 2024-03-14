const knex = require("knex")(require("../knexfile"));

//get all inventory
const index = async (_req, res) => {
  try {
    const data = await knex.select("*").from("inventories");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

//get inventory by selected Id
const selectedId = async (req, res) => {
  try {
    const inventoryId = await knex
      .select("*")
      .from("inventories")
      .where({ id: req.params.id });
    console.log(inventoryId);
    if (inventoryId.length === 0) {
      return res.status(404).json({
        message: `Inventory with ID ${req.params.id} not found: ${error.message}`,
      });
    }
    const inventoryData = inventoryId[0];
    res.json(inventoryData);
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve inventory data for inventory with ID ${req.params.id}: ${error.message}`,
    });
  }
};

//update inventory item
const updateInventory = async (req, res) => {
  try {
    const inventory = await knex
      .select("*")
      .where({ id: req.params.id })
      .update(req.body);
    console.log("update to ", inventory);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create inventory item
const createInventory = async (req, res) => {
  try {
    const inventory = await knex("inventories").insert(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete inventory item by selected Id

const deleteInventory = async (req, res) => {
  try {
    await knex("inventories").where({ id: req.params.id }).del();
    res.status(200).json({
      success: true,
      data: {
        message: `Inventory with ID ${req.params.id} successfully deleted.`,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

// get inventory by warehouse id
const inventoryByWarehouse = async (req, res) => {
  const warehouseId = req.params.warehouseId;
  try {
    const inventoryItems = await knex('inventories')
      .where({ warehouse_id: warehouseId }); 

    if (inventoryItems.length === 0) {
      return res.status(404).json({
        message: `No inventory found for warehouse with ID ${warehouseId}: ${error.message}`,
      });
    }

    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve inventory for warehouse with ID ${warehouseId}: ${error.message}`,
    });
  }
};


module.exports = {
  index: index,
  selectedId: selectedId,
  updateInventory: updateInventory,
  createInventory: createInventory,
  deleteInventory: deleteInventory,
  inventoryByWarehouse: inventoryByWarehouse,
};
