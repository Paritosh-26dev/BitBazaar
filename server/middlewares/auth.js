const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try { 
    // check ac token
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Authentication failed." });

    // validate
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Authentication failed." });
      // success
      req.user = user;
      // return res.status(200).json(req.user);
      next();
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
