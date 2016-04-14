app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService) {
  $scope.model = {};

  $scope.addStudent = function () {
    studentDataService.addStudent(this.student);
    $scope.student = {};
    $scope.getAll();
  }

  //Get ALL students
  $scope.getAll = function() {
    studentDataService.getAllStudents().then(function(students){
    $scope.allStudents = students.data.data;
    })
  }

  $scope.deleteStudent = function(id) {
    studentDataService.deleteStudent(id)
    $scope.getAll();
  }

  $scope.editStudent = function(id) {
    studentDataService.editStudent(id)
    $scope.getAll();
  }

  $scope.getAll();

}])
