
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