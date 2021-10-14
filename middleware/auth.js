const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //get the token from the header if present
  let token = req.session.accessToken;
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.redirect('/login');
  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.get("myprivatekey"));
    req.user = decoded._doc;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};