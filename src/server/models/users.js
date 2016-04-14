var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var config = require('../../../_config')


var UsersSchema = new Schema ({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false,
    required: true
  }
})

// hash the password before saving it to the db
UserSchema.pre('save', function(next) {
  var user = this;
  // only hash if password is new or being modified
  if (!user.isModified('password')) {
    return next();
  }
  // generate salt
  bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    // hash the password
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) {
        return next(err)
      }
      // override the plaintext password with the new hashed-salted password
      user.password = hash
      next();
    });
  });
});

// compare the password to verify plain text against the hashed password
UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, match) {
    if (err) {
      return done(err);
    }
    done(err, match);
  })
}

var User = mongoose.model('user', UserSchema);

module.exports = User;
