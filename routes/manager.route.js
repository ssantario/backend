const express = require("express");
const managerController = require("../controllers/manager.controller");
const router = express.Router();

router.post("/login", managerController.login);
router.post("/register", managerController.register);
router.get("/:name", managerController.getManager);

module.exports = router;
