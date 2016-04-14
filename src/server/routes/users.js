var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../../config')

var User = require('../models/users');

router.post('/register', function(req, res, next) {
  // ensure user does not already exist
  User.findOne({email: req.body.email}, function (err, user) {
    if(err){
      return next(err);
    }
    if(user) {
      return res.status(409).json({
        status: "fail",
        message: "Email already exists."
      })
    }
    // create new user
    var newUser = new User (req.body)
    newUser.save(function() {
      // create token
      var token = generateToken(user);
      res.satus(200).json({
        status: 'success',
        data: {
          token: token,
          user: user.email
        }
      })
    })
  })
});

router.post('/login', function(req, res, next) {
  // ensure the user exists
  User.findOne({email: req.body.email}, function (err, user) {
    if(err){
      return next(err);
    }
    if(!user) {
      return res.status(401).json({
        status: "fail",
        message: "Email does not exist."
      })
    }
    // if user does exist, compare plain text password with the hashed/salted password
    user.comparePassword(req.body.password, function(err, match){
      if (err) {
        return next(err)
      }
      if (!match){
        return res.status(401).json({
          status: "fail",
          message: "Password is not correct."
        })
      }
      user = user.toObject();
      delete user.password;
      var token = generateToken(user);
      res.status(200).json({
        status: 'success',
        data: {
          token: token,
          user: user
        }
      });
    });
  });
});

router.get('/logout', function(req, res, next) {

});

// *** helpers *** //

// generate a token
function generateToken(user) {
  var payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix();
    sub: user._id
  };
  return jwt.encode(payload, config.TOKEN_SECRET)
}

// ensure authenticated
function ensureAuthenticated(req, res, next) {
  //check headers for the presence of an auth object
  if(!(req.headers && req.headers.authorization))  {
    return res.status(401).json({
      status: "fail",
      message: "No headers or no authorization  header."
    })
  }
  // decode the token
  var header = req.headers.authorization.split(' ');
  var token = header[1]
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  var now = moment().unix();
  //ensure that token is valid and not expired
  if (now > payload.exp) {
    return res.status(401).json({
      status: "fail",
      message: "Token has expired."
    });
  }
  // ensure user is still in the database
  User.findById(payload.sub, function(err, user) {
    if(err) {
      return next(err)
    }
    if(!user) {
      return res.status({
        status: "Fail",
        message: "User does not exist"
      });
    }
    // attach user to the request object
    req.user = user;
    // call the next middleware function
    next()
  });
}

// ensure admin
function ensureAdmin (req, res, next) {
  // check for the user object
  // check for admin ==== true on the user object
  if(!(req.user && req.user.admin)) {
    // throw error
    return res.status(401).json({
      status: "fail",
      message: "User is not authorized as an admin"
    });
  }
  next()
}



module.exports = router;
