const express = require("express");
const employeeController = require("../controllers/employee.controller");
const router = express.Router();

router.post("/add", employeeController.addEmployee);
router.delete("/:id", employeeController.deleteEmployee);
router.get("/", employeeController.getEmployee);
router.get("/:id", employeeController.getOneEmployee);
router.put("/:id", employeeController.updateEmployee);

module.exports = router;
