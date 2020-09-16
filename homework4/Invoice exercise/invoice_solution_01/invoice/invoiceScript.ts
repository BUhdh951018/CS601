//Andy Quan's typescript code for homework 4's Invoice

declare enum Country {US, Japan, SaudiArabia, SouthAfrica, Mexico}
declare enum VALID {OK=0, NOT_OK=1}
declare enum INVALID {PRICE=2, INVENTORY=3, NAME=4, COUNTRY=5, QUANTITY=6}
type InvoiceState = 0 | 1 | 2 | 3 | 4 | 5 | 6; 


class invoice  {
	//fields
	partNumber: number;
	countryOfOrigin: Country;
	partDescription: string;
	quantity: number;
	price: number;
	discountApplied: string;
	state: InvoiceState;

	//constructor
	constructor(partVal:number, countryVal:string, descVal:string, quantityVal:number, priceVal:number, discountVal:string) {
		this.partNumber = partVal;
		this.partDescription = descVal;
		this.quantity = quantityVal;
		this.price = priceVal; 
		this.discountApplied = discountVal;
		switch(countryVal) {
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
		if(this.price < 0) {
			this.state = 2;
		}
		else if(this.quantity < 0) {
			this.state = 6;
		}
		else {
			this.state = 0; //it's okay
		}
	}
}

//the fields we need for representing multiple invoices
let invoices: invoice[] = [];
let count : number = 0;

function addInvoice() {
	//get values from the form
	let partInput:HTMLInputElement = document.getElementById("partNumberBox") as HTMLInputElement;
	let partVal:number = parseInt(partInput.value);

	let countryInput:any = document.getElementById("countryBox"); //this was difficult to figure out
	let countryVal:string = countryInput.options[countryInput.selectedIndex].value;

	let descInput:HTMLInputElement = document.getElementById("descriptionBox") as HTMLInputElement;
	let descVal:string = descInput.value;

	let quantityInput:HTMLInputElement = document.getElementById("quantityBox") as HTMLInputElement;
	let quantityVal:number = parseInt(quantityInput.value);

	let priceInput:HTMLInputElement = document.getElementById("priceBox") as HTMLInputElement;
	let priceVal:number = <number><unknown>parseFloat(priceInput.value).toFixed(2); //also rather difficult typing

	let discountInput:HTMLInputElement = document.getElementById("discountBox") as HTMLInputElement;
	let discountVal:string = discountInput.value;

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
	let currentCount:number = count-1;
	let stateString : string = "";
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

	let appendString : string = "" + currentCount + ".) " +  invoices[currentCount].partNumber + " | " + invoices[currentCount].countryOfOrigin + " | " + invoices[currentCount].partDescription + " | " + invoices[currentCount].quantity + " | " + invoices[currentCount].price + " | " + invoices[currentCount].discountApplied + " | " + stateString + "\n";
	let text:any = document.createTextNode(appendString);	

	let listOfInvoices:HTMLElement = document.getElementById("addedInvoices");
	
	if(count == 1) { //reveal somethings once there are invoices
		let headerRow:HTMLElement = document.getElementById("headerNames") as HTMLInputElement;
		headerRow.style.display = "block";
		let revealElement:HTMLElement = document.getElementById("testGetInvoiceAmount");
		revealElement.style.display ="block";

		listOfInvoices.textContent = appendString;

		let linebreak:HTMLElement = document.createElement("br");
		listOfInvoices.appendChild(linebreak);
	}
	else {
		listOfInvoices.appendChild(text);
		let linebreak:HTMLElement = document.createElement("br");
		listOfInvoices.appendChild(linebreak);
	}
}

function getInvoiceAmount() {
	let inputIndex:HTMLInputElement = document.getElementById("invoiceIndexBox") as HTMLInputElement;
	let indexNumber:number = parseInt(inputIndex.value);

	let beforeTax: number = invoices[indexNumber].quantity * invoices[indexNumber].price; 

	//get the tax amount & money symbol
	let taxPercentage:number = 0;
	let moneySymbol: any = "";
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


	let taxAmount: number = beforeTax * taxPercentage;
	let finalResult: number = taxAmount + beforeTax;

	let pResult:HTMLElement = document.getElementById("resultP");
	pResult.textContent = "Invoice Amount: " + moneySymbol +  finalResult.toString();



}

function reset() {
	//reset everything
	let invoices: invoice[] = [];
	let count : number = 0;

	let listOfInvoices:HTMLElement = document.getElementById("addedInvoices");
	listOfInvoices.textContent = "None";
}