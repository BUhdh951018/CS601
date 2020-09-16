//Andy Quan's typescript code for homework 4's Invoice
var invoice = /** @class */ (function () {
    //constructor
    function invoice(partVal, countryVal, descVal, quantityVal, priceVal, discountVal) {
        this.partNumber = partVal;
        this.partDescription = descVal;
        this.quantity = quantityVal;
        this.price = priceVal;
        this.discountApplied = discountVal;
        switch (countryVal) {
            case "US":
                this.countryOfOrigin = 0;
                break;
            case "Japan":
                this.countryOfOrigin = 1;
                break;
            case "Saudi Arabia":
                this.countryOfOrigin = 2;
                break;
            case "South Africa":
                this.countryOfOrigin = 3;
                break;
            case "Mexico":
                this.countryOfOrigin = 4;
                break;
        }
        //now decide the state
        if (this.price < 0) {
            this.state = 2;
        }
        else if (this.quantity < 0) {
            this.state = 6;
        }
        else {
            this.state = 0; //it's okay
        }
    }
    return invoice;
}());
//the fields we need for representing multiple invoices
var invoices = [];
var count = 0;
function addInvoice() {
    //get values from the form
    var partInput = document.getElementById("partNumberBox");
    var partVal = parseInt(partInput.value);
    var countryInput = document.getElementById("countryBox"); //this was difficult to figure out
    var countryVal = countryInput.options[countryInput.selectedIndex].value;
    var descInput = document.getElementById("descriptionBox");
    var descVal = descInput.value;
    var quantityInput = document.getElementById("quantityBox");
    var quantityVal = parseInt(quantityInput.value);
    var priceInput = document.getElementById("priceBox");
    var priceVal = parseFloat(priceInput.value).toFixed(2); //also rather difficult typing
    var discountInput = document.getElementById("discountBox");
    var discountVal = discountInput.value;
    /*
    console.log(partVal);
    console.log(countryVal);
    console.log(descVal);
    console.log(quantityVal);
    console.log(priceVal);
    console.log(discountVal);
    */
    var newInvoice = new invoice(partVal, countryVal, descVal, quantityVal, priceVal, discountVal);
    invoices[this.count] = newInvoice;
    this.count++;
    displayInvoices();
}
function displayInvoices() {
    var currentCount = count - 1;
    var stateString = "";
    switch (invoices[currentCount].state) {
        case 0:
            stateString = "VALID.OK";
            break;
        case 1:
            stateString = "VALID.NOT_OK";
            break;
        case 2:
            stateString = "INVALID.PRICE";
            break;
        case 6:
            stateString = "INVALID.QUANTITY";
            break;
    }
    var appendString = "" + currentCount + ".) " + invoices[currentCount].partNumber + " | " + invoices[currentCount].countryOfOrigin + " | " + invoices[currentCount].partDescription + " | " + invoices[currentCount].quantity + " | " + invoices[currentCount].price + " | " + invoices[currentCount].discountApplied + " | " + stateString + "\n";
    var text = document.createTextNode(appendString);
    var listOfInvoices = document.getElementById("addedInvoices");
    if (count == 1) { //reveal somethings once there are invoices
        var headerRow = document.getElementById("headerNames");
        headerRow.style.display = "block";
        var revealElement = document.getElementById("testGetInvoiceAmount");
        revealElement.style.display = "block";
        listOfInvoices.textContent = appendString;
        var linebreak = document.createElement("br");
        listOfInvoices.appendChild(linebreak);
    }
    else {
        listOfInvoices.appendChild(text);
        var linebreak = document.createElement("br");
        listOfInvoices.appendChild(linebreak);
    }
}
function getInvoiceAmount() {
    var inputIndex = document.getElementById("invoiceIndexBox");
    var indexNumber = parseInt(inputIndex.value);
    var beforeTax = invoices[indexNumber].quantity * invoices[indexNumber].price;
    //get the tax amount & money symbol
    var taxPercentage = 0;
    var moneySymbol = "";
    switch (invoices[indexNumber].countryOfOrigin) {
        case 0: //US
            taxPercentage = 0.0625;
            moneySymbol = "$";
            break;
        case 1: //Japan
            moneySymbol = "\u00A5";
            taxPercentage = 0.08;
            break;
        case 2: // Saudi Arabia
            moneySymbol = "SAR ";
            taxPercentage = 0.10; //couldn't find
            break;
        case 3: //South Africa
            moneySymbol = "Rand ";
            taxPercentage = 0.14;
            break;
        case 4: //Mexico
            moneySymbol = "\u20B1";
            taxPercentage = .16;
            break;
        default: //everyone else for now
            taxPercentage = 0.10;
            break;
    }
    var taxAmount = beforeTax * taxPercentage;
    var finalResult = taxAmount + beforeTax;
    var pResult = document.getElementById("resultP");
    pResult.textContent = "Invoice Amount: " + moneySymbol + finalResult.toString();
}
function reset() {
    //reset everything
    var invoices = [];
    var count = 0;
    var listOfInvoices = document.getElementById("addedInvoices");
    listOfInvoices.textContent = "None";
}
