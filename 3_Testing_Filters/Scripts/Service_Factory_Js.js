var app = angular.module("Service_FactoryApp", []);

app.service("ArithOpsService", function () {

    this.add = function (a, b) {
        return a + b;
    };

    this.sub = function (a, b) {
        return a - b;
    };

    this.mul = function (a, b) {
        return a * b;
    };

    this.div = function (a, b) {
        return a / b;
    };
     
});

app.controller("Service_Controller", function ($scope, ArithOpsService) {

    $scope.arithops = function (num) {
        switch (num) {
            case 1: var result = ArithOpsService.add($scope.firstnumber , $scope.secondnumber);
                    $scope.resultMessage = "The addition Result is : " + result;
                    break;

            case 2: var result = ArithOpsService.sub($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Substraction Result is : " + result;
                break;

            case 3: var result = ArithOpsService.mul($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Multiplication Result is : " + result;
                break;

            case 4: var result = ArithOpsService.div($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Division Result is : " + result;
                break;

            default: $scope.resultMessage = "Wrong Choose guys working on further extension.";
        }           
    };
});