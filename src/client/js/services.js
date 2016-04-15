app.service('studentDataService', ['crudService', function(crudService) {

  return {
    getAllStudents: function() {
      return crudService.getAll('students')
      .then(function(students){
        return students;
      });
    },
    addStudent: function(payload) {
      crudService.addOne('students', payload)
      .then(function(student){
        return student;
      });
    },
    deleteStudent: function(id) {
      crudService.deleteOne('students', id)
      .then(function(student) {
        return student;
      });
    }
  };
}]);

app.service('crudService', ['$http', function($http) {

  return {
    getAll: function(resource) {
      return $http.get('/'+resource)
        .then(function(res){
          return res
        })
        .catch(function(err){
          return err
        })
    },
    addOne: function(resource, payload) {
      return $http.post('/'+resource, payload)
        .then(function(res){
          return res
        })
        .catch(function(err){
          return err
        })
    },
    deleteOne: function(resource, id) {
      return $http.delete(resource + '/' + id)
      .then(function(res){
        return res
      })
      .catch(function(err){
        return err
      })
    }
  }

}])


app.service('authService', ['$http', '$window', function($http, $window) {
  var user = {};
  return {
    login: function(user) {
      return $http.post('/auth/login', user);
    },
    logout: function(user) {
      user = null;
      console.log('test');
      $window.localStorage.clear();
    },
    register: function(user) {
      return $http.post('/auth/register', user);
    },
    setUserInfo: function(userData) {
      $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
    getUserInfo: function(userData) {
      $window.localStorage.get('user');
    }
  }
}])

app.service('authInterceptor', ['$window', '$location', '$q', function($window, $location, $q){
  return {
    request: function(config){
      // check for token in headers
      // config.headers['X-requested-with'] = XMLHttpRequest;
      var token = $window.localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = "Bearer " + token;
        // return $q.resolve(config);
      }
      return config;
    },
    // response: function(config){
    //   debugger
    //   return config;
    // },
    responseError: function(err){
      // if header auth is not present, throw an error
      return err;
    }
  };
}]);

app.directive()
