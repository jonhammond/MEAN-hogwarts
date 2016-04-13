app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService) {
  $scope.model = {};

  $scope.addStudent = function () {
    studentDataService.addStudent(this.student);
    $scope.student = {};
  }

  //Get ALL students
  studentDataService.getAllStudents().then(function(students){
    $scope.allStudents = students.data.data;
  })

}])
