var calArray = new Array();
function addMeal() {
    var arrayItem = new Array();
    var meal = $('#meal').val();
    var calories = $('#calories').val();
    var date = $('#datepicker').val();
    if (meal !== "" && calories !== "" && date !== "") {
        arrayItem.push(meal);
        arrayItem.push(calories);
        arrayItem.push(date);
        calArray.push(arrayItem);
        printTable(meal, calories, date);
        totalCalories();
    }
    else {
        confirm("Please enter a meal information (name, calories & date");
    }
}
function printTable(meal, calories, date) {
    $("#printTable").append('<tr><td>' + meal +
        '</td><td>' + calories +
        '</td><td>' + date +
        '</td><td onclick="editMeal(this)"> Edit </td></td>' +
        '</td><td onclick="deleteMeal(this)"> Delete </td></td>');
}
function totalCalories() {
    var totalCalories = 0;
    $("#totalCalories").empty();
    $.each(calArray, function (i, item) {
        totalCalories = parseInt(totalCalories) + parseInt(item[1]);
    });
    $("#totalCalories").text(totalCalories);
}
function editMeal(element) {
    var index = 0;
    var table = document.getElementById('displayTable');
    var message = confirm("Do you want to edit this row");
    if (message === true) {
        //calArray[arrayItem[0]] = "pizza";
    }
    totalCalories();
}
function deleteMeal(element) {
    var index = 0;
    var table = document.getElementById('printTable');
    var message = confirm("Do you want to remove this meal");
    if (message === true) {
        index = element.parentNode.rowIndex;
        table.deleteRow(index);
        calArray.splice(index - 1, 1);
    }
    totalCalories();
}
