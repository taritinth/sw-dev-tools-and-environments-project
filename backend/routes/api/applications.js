const express = require("express");
const router = express();
const appController = require("../../controllers/applications.controller");
const { isAuth, isApplicationEmployer } = require("../../middleware");

router.get("/", isAuth, appController.getAllApps);
router.get("/:id", isAuth, appController.getApps);
router.post("/", isAuth, appController.addApps);
router.put("/:id", isAuth, isApplicationEmployer, appController.updateApps);

module.exports = router;
