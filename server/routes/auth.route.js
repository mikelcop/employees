const router = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    if (req.body.username === "admin" && req.body.password === "password") {
      const access_token = jwt.sign(
        {
          password: req.body.password
        },
        process.env.SECRET_TOKEN
      );
      res
        .header("auth-token")
        .send({ authenticated: true, token: access_token });
      //res.status(200).json({ authenticated: true, token: access_token });
    } else {
      res.status(200).json({ authenticated: false });
    }
  }
  res.status(400).json({ authenticated: false });
});

module.exports = router;
