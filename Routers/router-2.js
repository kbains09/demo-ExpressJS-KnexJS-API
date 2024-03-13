const express = require("express");
const router = express.Router();
const invenController = require("../controller/invenController");

router.route("/inventory").get(invenController.index);
router.route("/inventory/:id").get(invenController.selectedId);

module.exports = router;
