var app = angular.module('testApp', []);

app.controller("LoginController", function ($scope,$http) 
{



      $scope.OnLogin = function () {
          $http.post('/api/Home', $scope.loginInfo);
      };


});

