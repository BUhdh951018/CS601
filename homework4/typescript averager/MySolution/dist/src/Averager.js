import * as $ from "jquery";
var Averager = /** @class */ (function () {
    function Averager() {
        var _this = this;
        this.CLICK = "click";
        this.values = [];
        $("#getAverage").on(this.CLICK, function (event) {
            _this.findAverage();
        });
        $("#addBtn").on(this.CLICK, function (event) {
            var val = $("#target").val();
            var _number = new Number(val);
            _this.addValue(_number.valueOf());
        });
        $("#reset").on(this.CLICK, function (event) {
            _this.values = [];
            $("p").html("All data values have been removed.");
        });
    }
    Averager.prototype.addValue = function (value) {
        if (value >= 0) {
            this.values.push(value);
            $("p").html("We have... " + this.values.join(","));
        }
        $("#target").val("");
    };
    Averager.prototype.findAverage = function () {
        if (this.values.length > 0) {
            var result = this.values.reduce(function (accumulator, value) { return accumulator + value; });
            $("p").html("The average is: " + (result / this.values.length).toFixed(2));
        }
    };
    return Averager;
}());
export { Averager };