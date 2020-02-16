var app = angular.module("Service_FactoryApp", []);

app.controller("Service_Controller", function ($scope) {

    $scope.arithops = function (num) {
        switch (num) {
            case 1: var result = $scope.firstnumber + $scope.secondnumber;
                $scope.resultMessage = "The addition Result is : " + result;
                break;

            case 2: var result = $scope.firstnumber - $scope.secondnumber;
                $scope.resultMessage = "The Substraction Result is : " + result;
                break;

            case 3: var result = $scope.firstnumber * $scope.secondnumber;
                $scope.resultMessage = "The Multiplication Result is : " + result;
                break;

            case 4: var result = $scope.firstnumber / $scope.secondnumber;
                $scope.resultMessage = "The Division Result is : " + result;
                break;

            default: $scope.resultMessage = "Wrong Choise guys working on further extension.";
        }           
    };
});