var app = angular.module("EmployeeApp", []);

app.controller("EmployeeController", function ($scope, $http) {

    $scope.empList = [];

    $http.get("/api/Home").then(function (output) {

        $scope.empList = output.data;

    }, function (error) {
        console.log(error);
        });
});