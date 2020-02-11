var app = angular.module('testApp', []);

app.controller("LoginController", function ($scope) 
{
    $scope.loginInfo =
    {
        username: "Akhilesh",
        password: "Akhilesh@123"
    };


    $scope.OnLogin = function () {
        alert("Username :" + $scope.loginInfo.username + "And Password :" + $scope.loginInfo.password);
    };
});

