const express = require("express");
const router = express.Router();
const invenController = require("../controller/invenController");

router.route("/inventory").get(invenController.index);
router.route("/inventory/:id").get(invenController.selectedId);
router.route("/inventory").post(invenController.createInventory);
router.route("/inventory/:id").put(invenController.updateInventory);
router.route("/inventory/:id").delete(invenController.deleteInventory);

module.exports = router;
