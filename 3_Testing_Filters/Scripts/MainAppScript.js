var app = angular.module("Service_FactoryApp", []);


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