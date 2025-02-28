const express = require("express");
const { addDevice, getDevice, getAllDevices } = require("../controllers/addDeviceController");
const router = express.Router();

router.post("/add-device", addDevice);

router.get("/get-all-devices", getAllDevices);

router.get("/:android_id", getDevice);



module.exports = router;