var test = /** @class */ (function () {
    function test(date) {
        this.date = date;
    }
    return test;
}());
var tests = [];
var counts = 0;
function addTest() {
    var dateInput = document.getElementById('date');
    var date = dateInput.value;
    tests[this.counts] = new test(date);
    this.count++;
    var currentCounts = counts - 1;
    var table = document.getElementById('flight');
    var row = table.insertRow(-1);
    var col1 = row.insertCell(0);
    var day = document.createTextNode(tests[currentCounts].date);
    col1.appendChild(day);
}
