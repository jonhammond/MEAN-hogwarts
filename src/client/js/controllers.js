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

app.controller('registerController', ['$scope', '$location', 'authService', function($scope, $location, authService) {
  $scope.user = {};
  $scope.register = function () {
    authService.register($scope.user)
    .then(function(user) {
      authService.setUserInfo(user);
      $location.path('/');
    })
    .catch(function(err) {
      console.log('AH SHIT!', err);
      // check status code
      // send message
    })
  }
}])

app.controller('loginController', ['$scope', '$location', 'authService', function($scope, $location, authService) {
  $scope.user = {};
  $scope.login = function () {
    authService.login($scope.user)
    .then(function(user) {
      authService.setUserInfo(user);
      $location.path('/');
    })
    .catch(function(err) {
      console.log('AH SHIT!', err);
      // check status code
      // send message
    })
  }
}])
