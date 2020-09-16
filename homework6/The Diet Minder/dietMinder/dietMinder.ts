const calArray = new Array();
	
function addMeal(): void {

    let arrayItem = new Array();
    let meal: any = $('#meal').val();
    let calories: any = $('#calories').val();
    let date: any = $('#datepicker').val();

    if ( meal !== "" && calories !== "" && date !== "") {

        arrayItem.push(meal);
        arrayItem.push(calories)
        arrayItem.push(date)
        calArray.push(arrayItem);
        
        printTable(meal, calories, date);
        totalCalories();

    } else { 
        confirm("Please enter a meal information (name, calories & date");
    }
}

function printTable(meal, calories, date): void {

    $("#printTable").append(
        '<tr><td>' + meal +
        '</td><td>'+ calories +
        '</td><td>'+ date +
        '</td><td onclick="editMeal(this)"> Edit </td></td>' +
        '</td><td onclick="deleteMeal(this)"> Delete </td></td>');
}

function totalCalories(): void {

    let totalCalories: any = 0;
    $("#totalCalories").empty();
    $.each(calArray, function(i, item) {
        totalCalories = parseInt(totalCalories) + parseInt(item[1]);
    });
    $("#totalCalories").text(totalCalories);
}

function editMeal(element): void {

    let index: number = 0;
    let table: HTMLElement = document.getElementById('displayTable');
    let message: boolean = confirm("Do you want to edit this row");
    if (message === true) {
        //calArray[arrayItem[0]] = "pizza";
    } 
    totalCalories();
}

function deleteMeal(element): void {
    let index: number = 0;
    let table: HTMLElement = document.getElementById('printTable');
    let message: boolean = confirm("Do you want to remove this meal");
    if (message === true) {
        index = element.parentNode.rowIndex;
        table.deleteRow(index);
        calArray.splice(index-1, 1);
    }
    totalCalories();
}