process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Students = require('../../src/server/models/students');

// 
// chai.use(chaiHttp);
//
//
// describe('student routes', function() {
//
//
//   beforeEach(function(done) {
//     //drop db
//     testUtilities.dropDb()
//     //seed db
//     testSeed.runSeed(done);
//   });
//
//   afterEach(function(done) {
//     // drop db
//     testUtilities.dropDb(done)
//   });
//
//   // Test to get ALL students
//   describe('/GET students', function() {
//     it('should return all students', function(done) {
//       chai.request(server)
//       .get('/students')
//       .end(function(err, res) {
//         // console.log('res:', res);
//         res.status.should.equal(200);
//         res.type.should.equal('application/json');
//         res.body.should.be.a('object');
//         res.body.should.have.property('status');
//         res.body.should.have.property('data');
//         res.body.data.should.be.a('array');
//         res.body.status.should.equal('success');
//         res.body.data.length.should.equal(1);
//         res.body.data[0].firstName.should.equal('Harry');
//         res.body.data[0].lastName.should.equal('Potter');
//         res.body.data[0].year.should.equal(2007);
//         done();
//       });
//     });
//   });
//
//   // Test to get SINGLE student
//   describe('GET single student', function() {
//     it('should return one student', function(done) {
//       Students.findOne(function(err, student) {
//         var studentID = student._id;
//         chai.request(server)
//         .get('/students/'+studentID)
//         .end(function(err, res) {
//           res.should.have.status(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.should.have.property('data');
//           res.body.status.should.equal('success');
//           res.body.data.should.be.a('array');
//           res.body.data.length.should.equal(1);
//           res.body.data[0].firstName.should.equal('Harry');
//           res.body.data[0].lastName.should.equal('Potter');
//           res.body.data[0].year.should.equal(2007);
//           done();
//         })
//       })
//     });
//   });
//
//   // Test to update a SINGLE student
//   describe('/PUT students', function() {
//     it('should update a student', function(done) {
//       chai.request(server)
//       // .post('/students')
//       .get('/students')
//       .end(function(err, response) {
//         chai.request(server)
//         .put('/students/' + response.body.data[0]._id)
//         .end(function(err, res) {
//           res.status.should.equal(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.should.have.property('data');
//           res.body.status.should.equal('success');
//           res.body.data.firstName.should.equal('Ron');
//           res.body.data.lastName.should.equal('Weasely');
//           res.body.data.year.should.equal(2007);
//           done();
//         });
//       })
//     });
//   });
//
//   // Test to add a SINGLE student
//   describe('/POST STUDENTS', function () {
//     it('should add a student', function(done) {
//       chai.request(server)
//       .post('/students')
//       .send({
//         firstName: 'Hermione',
//         lastName: 'Granger',
//         year: 2007
//         })
//       .end(function(err,res) {
//         res.status.should.equal(200);
//         res.type.should.equal('application/json');
//         res.body.should.be.a('object');
//         res.body.data.firstName.should.equal('Hermione');
//         res.body.data.lastName.should.equal('Granger');
//         res.body.data.year.should.equal(2007);
//         done();
//         })
//       });
//     });
//
//   // describe('/POST students', function(){
//   //   it('should add a student', function(done){
//   //     chai.request(server)
//   //     .post('/students')
//   //     .send({
//   //       firstName: 'Hermione',
//   //       lastName: 'Granger',
//   //       year: 2007
//   //     })
//   //     .end(function(err, res){
//   //       console.log(res.body)
//   //       res.status.should.equal(200);
//   //       res.type.should.equal('application/json');
//   //       res.body.should.be.a('object');
//   //       res.body.data.should.be.a('array');
//   //       res.body.data.length.should.equal(2);
//   //       res.body.data.firstName.should.equal('Hermione');
//   //       res.body.data.lastName.should.equal('Granger');
//   //       res.body.data.year.should.equal(2007);
//   //       done();
//   //     })
//   //   })
//   // })
//
//   // Test to delete a SINGLE students
//   describe('DELETE from students', function() {
//     it('should delete a student', function(done) {
//       Students.findOne(function(err, student) {
//         var studentID = student._id;
//         chai.request(server)
//         .delete('/students/'+studentID)
//         .end(function(err, res) {
//           res.should.have.status(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.status.should.equal('success');
//           done();
//         })
//       })
//     });
//   });
//
// });
