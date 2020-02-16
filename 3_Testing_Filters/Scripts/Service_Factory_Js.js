var app = angular.module("Service_FactoryApp", []);

app.service("ArithOpsService", function () {

    this.add = function (a, b) {
        return parseInt(a) + parseInt(b);
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

app.factory("ArithOpsFactory", function () {

    var obj = {};

    obj.add = function (a, b) {
        return parseInt(a) + parseInt(b);
    };

    obj.sub = function (a, b) {
        return a - b;
    };

    obj.mul = function (a, b) {
        return a * b;
    };

    obj.div = function (a, b) {
        return a / b;
    };

    return obj;

});

app.controller("Service_Controller", function ($scope, ArithOpsFactory) {

    $scope.arithops = function (num) {
        switch (num) {
            case 1: var result = ArithOpsFactory.add($scope.firstnumber , $scope.secondnumber);
                    $scope.resultMessage = "The addition Result is : " + result;
                    break;

            case 2: var result = ArithOpsFactory.sub($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Substraction Result is : " + result;
                break;

            case 3: var result = ArithOpsFactory.mul($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Multiplication Result is : " + result;
                break;

            case 4: var result = ArithOpsFactory.div($scope.firstnumber , $scope.secondnumber);
                $scope.resultMessage = "The Division Result is : " + result;
                break;

            default: $scope.resultMessage = "Wrong Choose guys working on further extension.";
        }           
    };
});