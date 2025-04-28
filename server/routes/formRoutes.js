
const express = require("express");
const router = express.Router();

const { submitForm } = require("../controllers/formController");
const formController = require("../controllers/formController"); // ✅ <-- ADD THIS!


router.post("/submit", submitForm);

router.post("/send-email", formController.sendEmailToUser);


module.exports = router;
