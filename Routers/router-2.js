const express = require("express");
const router = express.Router();
const invenController = require("../controller/invenController");

router.route("/").get(invenController.index);
router.route("/:id").get(invenController.selectedId);
router.route("/").post(invenController.createInventory);
router.route("/:id").put(invenController.updateInventory);
router.route("/:id").delete(invenController.deleteInventory);
router
  .route("/warehouseItems/:warehouseId")
  .get(invenController.inventoryByWarehouse);

module.exports = router;
