class test{
    date: string;

    constructor(date:string){
        this.date = date;
    }
}

let tests: test[] = [];
let counts: number = 0

function addTest() {
    let dateInput: HTMLInputElement = document.getElementById("date") as HTMLInputElement;
    let date: string = dateInput.value;

    tests[this.counts] = new test(date);
    this.count++;
    let currentCounts: number = counts - 1;
    var add = <HTMLTableElement>document.getElementById("flight");
    var row = add.insertRow(-1);

    var col1 = row.insertCell(0);
    let day: any = document.createTextNode(tests[currentCounts].date);
    col1.appendChild(day);
}