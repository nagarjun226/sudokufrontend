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
    res.status(200).sendFile('/Users/nagarjunsrinivasan/njs/sudokufrontend/templates/index.html');
    console.log(`received request ${req.ip}`)
  });

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  /**
   * Some code for handling the user form data. A little ugly atm.
   * Ref : https://flaviocopes.com/express-forms/
   */
  app.use(express.urlencoded())

  app.post('/submit-form', (req, res) => {
    console.log(`${req.arr}`)
    console.log(`${req.body.ar}`)
    var arr = []
    /** 
    arr.push(req.body.a11)
    arr.push(req.body.a12)
    arr.push(req.body.a13)
    arr.push(req.body.a14)
    arr.push(req.body.a15)
    arr.push(req.body.a16)
    arr.push(req.body.a17)
    arr.push(req.body.a18)
    arr.push(req.body.a19)

    arr.push(req.body.a21)
    arr.push(req.body.a22)
    arr.push(req.body.a23)
    arr.push(req.body.a24)
    arr.push(req.body.a25)
    arr.push(req.body.a26)
    arr.push(req.body.a27)
    arr.push(req.body.a28)
    arr.push(req.body.a29)

    arr.push(req.body.a31)
    arr.push(req.body.a32)
    arr.push(req.body.a33)
    arr.push(req.body.a34)
    arr.push(req.body.a35)
    arr.push(req.body.a36)
    arr.push(req.body.a37)
    arr.push(req.body.a38)
    arr.push(req.body.a39)

    arr.push(req.body.a41)
    arr.push(req.body.a42)
    arr.push(req.body.a43)
    arr.push(req.body.a44)
    arr.push(req.body.a45)
    arr.push(req.body.a46)
    arr.push(req.body.a47)
    arr.push(req.body.a48)
    arr.push(req.body.a49)

    arr.push(req.body.a51)
    arr.push(req.body.a52)
    arr.push(req.body.a53)
    arr.push(req.body.a54)
    arr.push(req.body.a55)
    arr.push(req.body.a56)
    arr.push(req.body.a57)
    arr.push(req.body.a58)
    arr.push(req.body.a59)

    arr.push(req.body.a61)
    arr.push(req.body.a62)
    arr.push(req.body.a63)
    arr.push(req.body.a64)
    arr.push(req.body.a65)
    arr.push(req.body.a66)
    arr.push(req.body.a67)
    arr.push(req.body.a68)
    arr.push(req.body.a69)

    arr.push(req.body.a71)
    arr.push(req.body.a72)
    arr.push(req.body.a73)
    arr.push(req.body.a74)
    arr.push(req.body.a75)
    arr.push(req.body.a76)
    arr.push(req.body.a77)
    arr.push(req.body.a78)
    arr.push(req.body.a79)

    arr.push(req.body.a81)
    arr.push(req.body.a82)
    arr.push(req.body.a83)
    arr.push(req.body.a84)
    arr.push(req.body.a85)
    arr.push(req.body.a86)
    arr.push(req.body.a87)
    arr.push(req.body.a88)
    arr.push(req.body.a89)

    arr.push(req.body.a91)
    arr.push(req.body.a92)
    arr.push(req.body.a93)
    arr.push(req.body.a94)
    arr.push(req.body.a95)
    arr.push(req.body.a96)
    arr.push(req.body.a97)
    arr.push(req.body.a98)
    arr.push(req.body.a99)

    */


    console.log(`${arr}`)
    res.status(200).send(arr);
    res.end()
  })