var mongoose = require('mongoose');

// drop database
function dropDb (done) {
  mongoose.connection.db.dropDatabase();
  done();
}

// create and seed db
// function createDb (done) {
//   mongoose.connection.db.dropDatabase();
//   done();
// }

module.exports = {
  dropDb: dropDb
}
