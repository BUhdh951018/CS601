var invoice = /** @class */ (function () {
    function invoice(partNumber, countryOfOrigin, partDescription, quantity, price, discountApplied) {
        this.partNumber = partNumber;
        this.partDescription = partDescription;
        this.quantity = quantity;
        this.price = price;
        this.discountApplied = discountApplied;
        switch (countryOfOrigin) {
            case "US":
                this.countryOfOrigin = 0;
                break;
            case "China":
                this.countryOfOrigin = 1;
                break;
            case "Canada":
                this.countryOfOrigin = 2;
                break;
            case "Germany":
                this.countryOfOrigin = 3;
                break;
            case "France":
                this.countryOfOrigin = 4;
                break;
        }
        if (this.price < 0) {
            this.state = 2;
        }
        else if (this.quantity < 0) {
            this.state = 6;
        }
        else {
            this.state = 0;
        }
    }
    return invoice;
}());
var invoices = [];
var count = 0;
function addInvoice() {
    var partNumberInput = document.getElementById("partNumber");
    var partNumber = parseInt(partNumberInput.value);
    var countryInput = document.getElementById("countryofOrigin");
    var country = countryInput.options[countryInput.selectedIndex].value;
    var descriptionInput = document.getElementById("description");
    var description = descriptionInput.value;
    var quantityInput = document.getElementById("quantity");
    var quantity = parseInt(quantityInput.value);
    var priceInput = document.getElementById("price");
    var price = parseFloat(priceInput.value);
    var discountInput = document.getElementById("discount");
    var discount = discountInput.value;
    invoices[this.count] = new invoice(partNumber, country, description, quantity, price, discount);
    this.count++;
    showInvoices();
}
function showInvoices() {
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
    var add = document.getElementById("invoice");
    var row = add.insertRow(-1);
    var line1 = row.insertCell(0);
    var current = "" + currentCount;
    var lineCount = document.createTextNode(current);
    line1.appendChild(lineCount);
    var line2 = row.insertCell(1);
    var num = "" + invoices[currentCount].partNumber;
    var part = document.createTextNode(num);
    line2.appendChild(part);
    var line3 = row.insertCell(2);
    var coo = "" + invoices[currentCount].countryOfOrigin;
    var country = document.createTextNode(coo);
    line3.appendChild(country);
    var line4 = row.insertCell(3);
    var description = document.createTextNode(invoices[currentCount].partDescription);
    line4.appendChild(description);
    var line5 = row.insertCell(4);
    var quan = "" + invoices[currentCount].quantity;
    var quantity = document.createTextNode(quan);
    line5.appendChild(quantity);
    var line6 = row.insertCell(5);
    var pri = "" + invoices[currentCount].price;
    var price = document.createTextNode(pri);
    line6.appendChild(price);
    var line7 = row.insertCell(6);
    var discount = document.createTextNode(invoices[currentCount].discountApplied);
    line7.appendChild(discount);
    if (count == 1) {
        document.getElementById("getAmount").style.display = "block";
    }
}
function getAmount() {
    var inputIndex = document.getElementById("invoiceIndex");
    var indexNumber = parseInt(inputIndex.value);
    var total = invoices[indexNumber].quantity * invoices[indexNumber].price;
    var tax = 0;
    var symbol = "";
    switch (invoices[indexNumber].countryOfOrigin) {
        case 0:
            tax = 0.0625;
            symbol = "$";
            break;
        case 1:
            tax = 0.01;
            symbol = "¥";
            break;
        case 2:
            tax = 0.05;
            symbol = "C$";
            break;
        case 3:
            tax = 0.07;
            symbol = "DEM";
            break;
        case 4:
            tax = 0.20;
            symbol = "FRF";
            break;
    }
    var taxAmount = total * tax;
    var finalTotal = total + taxAmount;
    var showTotal = document.getElementById("showTotal");
    showTotal.textContent = "Invoice Amount: " + symbol + finalTotal.toString();
}
function reset() {
    var invoices = [];
    var count = 0;
}
