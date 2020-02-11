var app = angular.module('testApp', []);

app.controller("LoginController", function ($scope) 
{
    $scope.username = "Akhilesh";
    $scope.password = "Akhilesh@123";

    $scope.OnLogin = function () {
        alert("Username :" + $scope.username + "And Password :" + $scope.password);
    };
});

