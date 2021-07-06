const express = require("express");
const router = express.Router();

const { countryControllers } = require("../app/controllers");
const { upload } = require("../app/utils");

router.post("/country", upload.single("image"), countryControllers.store);

router.get("/country", countryControllers.list);

router.delete("/country/:id", countryControllers.delete);

router.put("/country/:id", upload.single("image"), countryControllers.update);

module.exports = router;
