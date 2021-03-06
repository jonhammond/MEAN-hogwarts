var express = require('express');
var router = express.Router();
var Students = require('../models/students');

// Get all students
router.get('/', function(req, res, next) {
  Students.find({})
  .then(function (result) {
    res.status(200).json({
      status : 'success',
      data : result })
    })
  .catch(function (error) {
    return next(error);
  })
});

// Get ALL students route
// router.get('/', function(req, res, next) {
//   Students.find({}, function(err, students) {
//     if (err) {
//       return next(err);
//     }
//     res.status(200).json({
//       status: 'success',
//       data: students
//     });
//   });
// });

// Get a SINGLE student route
router.get('/:id', function(req, res, next) {
  Students.find({_id: req.params.id})
  .then(function (student) {
    res.status(200).json({
      status : 'success',
      data : student })
    })
  .catch(function (error) {
    return next(error);
  })
});
// router.get('/:id', function(req, res, next) {
//   Students.find({_id: req.params.id}, function(err) {
//     if (err) {
//       return next(err);
//     }
//     res.status(200).json({
//       status: "success",
//       data: student
//     });
//   });
// });

// Update a SINGLE student route
router.put('/:id', function(req, res, next) {
  Students.findOneAndUpdate({firstName: 'Harry'}, {firstName: 'Ron', lastName: 'Weasely'}, {new:true})
  .then(function (student) {
    res.status(200).json({
      status : 'success',
      data : student
    })
  })
  .catch(function (error) {
    return next(error);
  })
});
// router.put('/:id', function(req, res, next) {
//   Students.findOneAndUpdate({firstName: 'Harry'}, {firstName: 'Ron', lastName: 'Weasely'}, {new:true}, function(err, students) {
//     if (err) {
//       return next(err);
//     }
//     res.status(200).json({
//       status: 'success',
//       data: students
//     });
//   });
// });

// Add a SINGLE student route
router.post('/', function(req, res, next) {
  var student = Students(req.body);
  student.save()
  .then(function (student) {
    res.status(200).json({
      status : 'success',
      data : student })
  })
  .catch(function (error) {
    return next(error);
  })
});
// router.post('/', function(req, res, next){
//  var student = Students(req.body);
//  student.save(function(error, student){
//   //  console.log("post:",student);
//    res.status(200).json({
//      status: 'success',
//      data: student
//    });
//  });
// });

// Delete a SINGLE student route
router.delete('/:id', function(req, res, next) {
  console.log("Delete endpoint hit...");
  var studentID = req.params.id;
  Students.findByIdAndRemove(studentID)
  .then(function (student) {
    res.status(200).json({
      status : 'success',
      data : student })
    })
  .catch(function (error) {
    return next(error);
  })
});
// router.delete('/:id', function(req, res, next) {
//   console.log("Deleting endpoint hit...");
//   var studentID = req.params.id;
//   Students.findByIdAndRemove(studentID, function(err, student) {
//     if (err) {
//       return next(err);
//     }
//     res.status(200).json({
//       status: "success",
//       data: student
//     });
//   });
// });

module.exports = router;
