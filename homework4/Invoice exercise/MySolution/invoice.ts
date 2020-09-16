declare enum Country {US, China, Canada, Germany, France}
declare enum VALID {OK=0, NOT_OK=1}
declare enum INVALID {PRICE=2, INVENTORY=3, NAME=4, COUNTRY=5, QUANTITY=6}
type InvoiceState = 0 | 1 | 2 | 3 | 4 | 5 | 6;

class invoice {
    partNumber: number;
    countryOfOrigin: Country;
    partDescription: string;
    quantity: number;
    price: number;
    discountApplied: string;
    state: InvoiceState;

    constructor(partNumber:number, countryOfOrigin:string, partDescription:string, quantity:number, price:number, discountApplied:string) {
        this.partNumber = partNumber;
        this.partDescription = partDescription;
        this.quantity = quantity;
        this.price = price;
        this.discountApplied = discountApplied;
        switch(countryOfOrigin) {
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
        
        if(this.price < 0) {
            this.state = 2;
        }else if(this.quantity < 0) {
            this.state = 6;
        }else {
            this.state = 0; 
        }
    }
}

let invoices: invoice[] = [];
let count: number = 0;

function addInvoice() {
    let partNumberInput: HTMLInputElement = document.getElementById("partNumber") as HTMLInputElement;
    let partNumber: number = parseInt(partNumberInput.value);

    let countryInput: any = document.getElementById("countryofOrigin");
    let country: string = countryInput.options[countryInput.selectedIndex].value;

    let descriptionInput: HTMLInputElement = document.getElementById("description") as HTMLInputElement;
    let description: string = descriptionInput.value;

    let quantityInput: HTMLInputElement = document.getElementById("quantity") as HTMLInputElement;
    let quantity: number = parseInt(quantityInput.value);

    let priceInput: HTMLInputElement = document.getElementById("price") as HTMLInputElement;
    let price: number = parseFloat(priceInput.value);

    let discountInput: HTMLInputElement = document.getElementById("discount") as HTMLInputElement;
    let discount: string = discountInput.value;

    invoices[this.count] = new invoice(partNumber, country, description, quantity, price, discount);
    this.count++;
    showInvoices();
}

function showInvoices() {
    let currentCount: number = count - 1;
    let stateString: string = "";
    switch(invoices[currentCount].state) {
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

    var add = <HTMLTableElement>document.getElementById("invoice");
    var row = add.insertRow(-1);

    var line1 = row.insertCell(0);
    let current: string = "" + currentCount;
    let lineCount: any = document.createTextNode(current);
    line1.appendChild(lineCount);

    var line2 = row.insertCell(1);
    let num: string = "" + invoices[currentCount].partNumber;
    let part: any = document.createTextNode(num);
    line2.appendChild(part);

    var line3 = row.insertCell(2);
    let coo: string = "" + invoices[currentCount].countryOfOrigin;
    let country: any = document.createTextNode(coo);
    line3.appendChild(country);

    var line4 = row.insertCell(3);
    let description: any = document.createTextNode(invoices[currentCount].partDescription);
    line4.appendChild(description);

    var line5 = row.insertCell(4);
    let quan: string = "" + invoices[currentCount].quantity;
    let quantity: any = document.createTextNode(quan);
    line5.appendChild(quantity);

    var line6 = row.insertCell(5);
    let pri: string = "" + invoices[currentCount].price;
    let price: any = document.createTextNode(pri);
    line6.appendChild(price);

    var line7 = row.insertCell(6);
    let discount: any = document.createTextNode(invoices[currentCount].discountApplied);
    line7.appendChild(discount);
    
    if(count == 1) {
        document.getElementById("getAmount").style.display = "block";
    }
}

function getAmount() {
    let inputIndex: HTMLInputElement = document.getElementById("invoiceIndex") as HTMLInputElement;
    let indexNumber: number = parseInt(inputIndex.value);

    let total: number = invoices[indexNumber].quantity * invoices[indexNumber].price;

    let tax: number = 0;
    let symbol: any = "";
    switch(invoices[indexNumber].countryOfOrigin) {
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

    let taxAmount: number = total * tax;
    let finalTotal: number = total + taxAmount;

    let showTotal: HTMLElement = document.getElementById("showTotal");
    showTotal.textContent = "Invoice Amount: " + symbol + finalTotal.toString();
}

function reset() {
    let invoices: invoice[] = [];
    let count: number = 0;

}