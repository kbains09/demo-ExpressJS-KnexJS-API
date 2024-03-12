const warehouseData = require ('../seed-data/warehouse')
const inventoryData = require ('../seed-data/inventory')

/**
 * @param {import('knex')} knex
 * @returns {Promise<void>}
 */

exports.seed = async function (knex) {
  await knex('warehouses').del();
  await knex('inventories').del();

  await knex('warehouses').insert(warehouseData);
  await knex('inventories').insert(inventoryData);
}