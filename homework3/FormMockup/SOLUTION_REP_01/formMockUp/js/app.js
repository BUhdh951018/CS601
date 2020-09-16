/*
Create an event listner when the submit button is pressed

it will gather the values inserted within the form

depending on those values

if age < 21:
bring them to chumplag.com
else:
bring them to disney.com

*/

// get values
var userMonth = document.getElementById('userMonth');
var userDay = document.getElementById('userDay');
var userYear = document.getElementById('userYear');
var submitButton = document.getElementById('btnCheckBday');

// when the button is clicked
submitButton.addEventListener("click", calcBirthDate);

// calculating birthday
function calcBirthDate(event) {
    // button reloads only when clicked
    event.preventDefault();
    // get values from user info
    month = userMonth.value;
    day = userDay.value;
    year = userYear.value;

    today = new Date();
    oldEnough = new Date();
    oldEnough.setFullYear(today.getFullYear() - 21);
    birthday = new Date(year, month, day);

    if (birthday < oldEnough) {
        // old enough
        window.location.href = 'https://www.boomchugalug.com/';
    } else {
        // young
        window.location.href = 'https://www.disney.com/';
    }
}




