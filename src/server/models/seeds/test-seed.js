var Student = require('../students');

var data = [
  {
    firstName: 'Harry',
    lastName: 'Potter',
    year: 2007
  },
  // {
  //   firstName: 'Ron',
  //   lastName: 'Weasely',
  //   year: 2007
  // }
];

function runSeed (done) {
  var student = new Student(data[0]);
  student.save(function(err, res) {
    done();
  })
  // data.forEach(function(el){
  //   Students.insertMany(el);
  // });
  // done();
}

module.exports = {
  runSeed: runSeed
}
