const express = require("express");
const {handleGeneratedNewShortURL} = require("../controllers/url");

//This creates a new router object. A router object is an isolated instance of middleware and routes. 
const router = express.Router();

router.post("/", handleGeneratedNewShortURL);

module.exports = router;