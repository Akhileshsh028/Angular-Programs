var app = angular.module("EmployeeApp", []);

app.filter("et", function () {

    return function (input) {
        if (input) {
            return "Permanent Employee";
        } else {
            return "Contract Employee";
        }
    };
});

app.controller("EmployeeController", function ($scope, $http) {

    $scope.empList = [];

    $http.get("/api/Home").then(function (output) {

        $scope.empList = output.data;

    }, function (error) {
        console.log(error);
    });

    $scope.RolesList = ["Employee", "Manager", "Team Lead", "Technical Evangulist"];

    $scope.OnRolesClick = function () {
        alert($scope.SelectedRoles);
    };

    $scope.OnEmployeeClick = function () {
        // alert($scope.SelectedEmployee);
        alert(JSON.stringify($scope.SelectedEmployee));
    };

    // we don't want the object to hold everything that decreases the performance.
    $scope.OnEmployeeClick1 = function () {
        // alert($scope.SelectedEmployee);
        alert($scope.SelectedEmployee1);
    };

});