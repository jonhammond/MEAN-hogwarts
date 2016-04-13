process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');

chai.use(chaiHttp);


describe('student routes', function() {


  beforeEach(function(done) {
    //drop db
    testUtilities.dropDb(done)
    //seed db
  });

  afterEach(function(done) {
    // drop db
    testUtilities.dropDb(done)
  });

  describe('', function() {

    it('', function(done) {
      done();
    });
  });

});
