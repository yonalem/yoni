const jwt = require('jsonwebtoken');
const config = require('config');
const { request } = require('express');

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next(); //Why is this here ?
    //Next is the call back fucntion that we have to run if everything went good. It allows to move to the next middleware
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
