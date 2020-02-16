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