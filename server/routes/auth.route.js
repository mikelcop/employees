const router = require("express").Router();
const jwt = requite("jsonwebtoken");

router.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    if (req.body.username === "admin" && req.body.password === "password") {
      const token = jwt.sign(
        {
          password: req.body.password
        },
        process.env.SECRET_TOKEN
      );
      res.status(200).json({ authenticated: true });
    } else {
      res.status(200).json({ authenticated: false });
    }
  }
  res.status(400).json({ authenticated: false });
});

module.exports = router;
