declare enum Country { US, China, Canada, Germany, France }
declare enum Flavor {NONE, WHITE, BLACK}
class coffee {
    coffeeFlavor: Flavor = Flavor.NONE;
    optimalTemperature: number = 140.0;
    steepingTime: number = 0;
    servingSizes: number[];
    country: Country;
    message: String[] = ["Please enjoy our dark roast coffee. It will be served extremely hot." , 
    "Please be careful. While all coffees are best served hot, our coffee are exceptional and may be even hotter than normal.",
    "Please enjoy responsibly. If you spill our hot coffee on yourself, please visit the nearest hospital."];

    constructor(coffeeFlavor:Flavor, optimalTemperature:number, steepingTime:number, servingSizes:number[], country:String, message:String[]) {
        this.coffeeFlavor = coffeeFlavor;
        this.optimalTemperature = optimalTemperature;
        this.steepingTime =steepingTime;
        this.servingSizes = servingSizes;
        this.message = message;
        switch (country) {
            case "US":
                this.country = 0;
                break;
            case "China":
                this.country = 1;
                break;
            case "Canada":
                this.country = 2;
                break;
            case "Germany":
                this.country = 3;
                break;
            case "France":
                this.country = 4;
                break;
        }
    }
}

let coffees: coffee[] = [];
let count: number = 0;


function getWarning() {
    let partNumberInput: HTMLInputElement = document.getElementById("partNumber") as HTMLInputElement;
    let coffeeFlavor: number = parseInt(partNumberInput.value);

    let countryInput: any = document.getElementById("countryofOrigin");
    let country: string = countryInput.options[countryInput.selectedIndex].value;

    let descriptionInput: HTMLInputElement = document.getElementById("description") as HTMLInputElement;
    let steepingTime: number = parseInt(descriptionInput.value);

    let quantityInput: HTMLInputElement = document.getElementById("quantity") as HTMLInputElement;
    let optimalTemperature: number = parseInt(quantityInput.value);

    /*let priceInput: HTMLInputElement = document.getElementById("price") as HTMLInputElement;
    let servingSizes: number[] = (priceInput.value);*/

    let servingSizes: number[] = [1];
    let message : string[];

    coffees[this.count] = new coffee(coffeeFlavor, optimalTemperature, steepingTime, servingSizes, country, message);
    this.count++;
    showCoffee();
}

function showCoffee() {
    let currentCount: number = count - 1;

    var add = <HTMLTableElement>document.getElementById("coffee");
    var row = add.insertRow(1);

    var line1 = row.insertCell(0);
    let current: string = "" + currentCount;
    let lineCount: any = document.createTextNode(current);
    line1.appendChild(lineCount);

    var line2 = row.insertCell(1);
    let flavor: string = "" + coffees[currentCount].coffeeFlavor;
    let coffeeFlavor: any = document.createTextNode(flavor);
    line2.appendChild(coffeeFlavor);

    var line3 = row.insertCell(2);
    let coo: string = "" + coffees[currentCount].country;
    let country: any = document.createTextNode(coo);
    line3.appendChild(country);

    var line4 = row.insertCell(3);
    let steep: string = "" + coffees[currentCount].steepingTime;
    let steepingTime: any = document.createTextNode(steep);
    line4.appendChild(steepingTime);

    var line5 = row.insertCell(4);
    let opt: string = "" + coffees[currentCount].optimalTemperature;
    let temp =""+ isScalding(opt);
    let quantity: any = document.createTextNode(temp);
    line5.appendChild(quantity);

    var line6 = row.insertCell(5);
    let serv: string = "" + coffees[currentCount].servingSizes;
    let Sizes: any = document.createTextNode(serv);
    line6.appendChild(Sizes);

    var line7 = row.insertCell(6);
    let number: number = Math.random();
    let temp1 :number = 0;
    if(number > 0.5){
        temp1 = 0;
    } else{
        temp1 = 1;
    }
    let mes: string = "" + coffees[currentCount].message[temp1];
    let message: any = document.createTextNode(mes);
    line6.appendChild(message);
}

function isScalding(opt:String){
    let temp: String = opt;
    if (temp > "90"){
        return true;
    } else{
        return false;
    }
}
