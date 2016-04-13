var express = require('express');
var router = express.Router();
var Students = require('../models/students');

// Get ALL students route
router.get('/', function(req, res, next) {
  Students.find({}, function(err, students) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: students
    });
  });
});

// Get a SINGLE student route
router.get('/:id', function(req, res, next) {
  Students.find({_id: req.params.id}, function(err, student) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: student
    });
  });
});

// Update a SINGLE student route
router.put('/:id', function(req, res, next) {
  Students.findOneAndUpdate({firstName: 'Harry'}, {firstName: 'Ron', lastName: 'Weasely'}, {new:true}, function(err, students) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: students
    });
  });
});

// Add a SINGLE student route
router.post('/', function(req, res, next){
 var student = Students(req.body);
 student.save(function(error, student){
   res.status(200).json({
     status: 'success',
     data: student
   });
 });
});
// router.post('/', function(req, res, next) {
//   // var student = new Student(req.body);
//   Students.insert({firstName: 'Hermione', lastName: 'Granger', year: 2007}, function(err, student){
//     res.status(200).json({
//       status: 'success',
//       data: student
//     });
//   });
// });

// Delete a SINGLE student route
router.delete('/:id', function(req, res, next) {
  var studentID = req.params.id;
  Students.findByIdAndRemove(studentID, function(err, student) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: student
    });
  });
});

module.exports = router;
