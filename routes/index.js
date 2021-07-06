const express = require("express");
const router = express.Router();

router.post("/country", (req, res, next) => {
  return res.send({ success: true, message: "create new country" });
});

router.get("/country", (req, res, next) => {
  return res.send({ success: true, message: "list all countries" });
});

router.put("/country/:id", (req, res, next) => {
  return res.send({ success: true, message: "update one country" });
});

router.delete("/country/:id", (req, res, next) => {
  return res.send({ success: true, message: "delete one country" });
});

module.exports = router;
