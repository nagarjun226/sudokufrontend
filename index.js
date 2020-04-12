// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");


/**
 * App Variables
 */
const app = express();
const port = "8000";

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("Solve That Sudoku!");
    console.log(`received request ${req.ip}`)
  });

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });