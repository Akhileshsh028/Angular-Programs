var app = angular.module("VerbTest",[]);

app.controller("LoginController", function ($scope, $http) {
    $scope.Login = function ()
    {
        $http.post('/api/home', $scope.lgi).then(function (result) {
            if (result.data)
            {
                alert("Valid Crediantials");   
            } else
            {
                alert("Invalid Crediantials");
            }
        });
    }
});