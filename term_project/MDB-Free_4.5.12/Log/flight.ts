class flight {
    date: string;
    flight: number;
    dep_arr: string;
    times: number;
    flight_with: string;
    seat: string;
    cabin: string;
    gate_dep: string;
    gate_arr: string;
    aricraft: string;
    rego: string;
    block_time: string;
    distance: number;
    altitude: number;
    parking_bay1: string;
    parking_bay2: string;
    chocks1: string;
    chocks2: string;
    runaway1: string;
    runaway2: string;

    constructor(date: string, flight: number, dep_arr: string, 
                times:number,
                flight_with:string, seat:string, cabin:string, 
                gate_dep:string, gate_arr:string, aricraft:string,
                rego:string, block_time:string, distance:number,
                altitude:number, parking_bay1:string, parking_bay2:string,
                chocks1:string, chocks2:string, runaway1:string,
                runaway2:string) {
            this.date = date;
            this.flight = flight;
            this.dep_arr = dep_arr;
            this.times = times;
            this.flight_with = flight_with;
            this.seat = seat;
            this.cabin = cabin;
            this.gate_dep = gate_dep;
            this.gate_arr = gate_arr;
            this.aricraft = aricraft; 
            this.rego = rego;
            this.block_time = block_time;
            this.distance = distance;
            this.altitude = altitude;
            this.parking_bay1 = parking_bay1;
            this.parking_bay2 = parking_bay2;
            this.chocks1 = chocks1;
            this.chocks2 = chocks2;
            this.runaway1 = runaway1;
            this.runaway2 = runaway2;
        }
}

let flights: flight[] = [];
let count: number = 0;

function addFlight() {
    let dateInput: HTMLInputElement = document.getElementById("date") as HTMLInputElement;
    let date: string = dateInput.value;

    let flightInput: HTMLInputElement = document.getElementById("flight") as HTMLInputElement;
    let flight_n: number = parseInt(flightInput.value);
    
    let dep_arrInput: HTMLInputElement = document.getElementById("d-a") as HTMLInputElement;
    let dep_arr: string = dep_arrInput.value;

    let timesInput: HTMLInputElement = document.getElementById("times") as HTMLInputElement;
    let times: number = parseInt(timesInput.value);

    let flight_withInput: HTMLInputElement = document.getElementById("code") as HTMLInputElement;
    let flight_with: string = flight_withInput.value;

    let seatInput: HTMLInputElement = document.getElementById("seat") as HTMLInputElement;
    let seat: string = seatInput.value;

    let cabinInput: HTMLInputElement = document.getElementById("cabin") as HTMLInputElement;
    let cabin: string = cabinInput.value;

    let gate_depInput: HTMLInputElement = document.getElementById("gate_d") as HTMLInputElement;
    let gate_dep: string = gate_depInput.value;

    let gate_arrInput: HTMLInputElement = document.getElementById("gate_a") as HTMLInputElement;
    let gate_arr: string = gate_arrInput.value;

    let aricraftInput: HTMLInputElement = document.getElementById("aricraft") as HTMLInputElement;
    let aricraft: string = aricraftInput.value;

    let regoInput: HTMLInputElement = document.getElementById("rego") as HTMLInputElement;
    let rego: string = regoInput.value;

    let block_timeInput: HTMLInputElement = document.getElementById("time") as HTMLInputElement;
    let block_time: string = block_timeInput.value;

    let distanceInput: HTMLInputElement = document.getElementById("distance") as HTMLInputElement;
    let distance: number = parseInt(distanceInput.value);

    let altitudeInput: HTMLInputElement = document.getElementById("altitude") as HTMLInputElement;
    let altitude: number = parseInt(altitudeInput.value);

    let parking_bay1Input: HTMLInputElement = document.getElementById("bay_d") as HTMLInputElement;
    let bay_d: string = parking_bay1Input.value;

    let parking_bay2Input: HTMLInputElement = document.getElementById("bay_a") as HTMLInputElement;
    let bay_a: string = parking_bay2Input.value;

    let chocks1Input: HTMLInputElement = document.getElementById("chock_off") as HTMLInputElement;
    let off: string = chocks1Input.value;

    let chocks2Input: HTMLInputElement = document.getElementById("chock_on") as HTMLInputElement;
    let on: string = chocks2Input.value;

    let runaway1Input: HTMLInputElement = document.getElementById("runaway_d") as HTMLInputElement;
    let runaway_d: string = runaway1Input.value;

    let runaway2Input: HTMLInputElement = document.getElementById("runaway_a") as HTMLInputElement;
    let runaway_a: string = runaway2Input.value;

    flights[this.count] = new flight(date, flight_n, dep_arr, times, flight_with, seat, cabin, gate_dep, gate_arr, aricraft, rego, block_time, distance, altitude, bay_d, bay_a, off, on, runaway_d, runaway_a);
    this.count++;
    showFlights();
}

function showFlights() {
    let currentCount: number = count - 1;

    var add = <HTMLTableElement>document.getElementById("flight");
    var row = add.insertRow(-1);

    var col1 = row.insertCell(0);
    let day: any = document.createTextNode(flights[currentCount].date);
    col1.appendChild(day);

    var col2 = row.insertCell(1);
    let foo: string = "" + flights[currentCount].flight;
    let fli: any = document.createTextNode(foo);
    col2.appendChild(fli);

    var col3 = row.insertCell(2);
    let d_a: any = document.createTextNode(flights[currentCount].gate_arr);
    col3.appendChild(d_a);

    var col4 = row.insertCell(3);
    let too: string = "" + flights[currentCount].times;
    let tim: any = document.createTextNode(too);
    col4.appendChild(tim);

    var col5 = row.insertCell(4);
    let fli_with: any = document.createTextNode(flights[currentCount].flight_with);
    col5.appendChild(fli_with);

    var col6 = row.insertCell(5);
    let sea: any = document.createTextNode(flights[currentCount].seat);
    col6.appendChild(sea);

    var col7 = row.insertCell(6);
    let cab: any = document.createTextNode(flights[currentCount].cabin);
    col7.appendChild(cab);

    var col8 = row.insertCell(7);
    let ga_d: any = document.createTextNode(flights[currentCount].gate_dep);
    col8.appendChild(ga_d);

    var col9 = row.insertCell(8);
    let ga_a: any = document.createTextNode(flights[currentCount].gate_arr);
    col9.appendChild(ga_a);

    var ins = <HTMLTableElement>document.getElementById("plane");
    var row2 = ins.insertRow(1);

    var line1 = row2.insertCell(0);
    let air: any = document.createTextNode(flights[currentCount].aricraft);
    line1.appendChild(air);

    var line2 = row2.insertCell(1);
    let re: any = document.createTextNode(flights[currentCount].rego);
    line2.appendChild(re);

    var line3 = row2.insertCell(2);
    let blo: any = document.createTextNode(flights[currentCount].block_time);
    line3.appendChild(blo);

    var line4 = row2.insertCell(3);
    let doo: string = "" + flights[currentCount].distance;
    let dis: any = document.createTextNode(doo);
    line4.appendChild(dis);

    var line5 = row2.insertCell(4);
    let aoo: string = "" + flights[currentCount].altitude;
    let alt: any = document.createTextNode(aoo);
    line5.appendChild(alt);

    var line6 = row2.insertCell(5);
    let bay: any = document.createTextNode(flights[currentCount].parking_bay1) + "-" + document.createTextNode(flights[currentCount].parking_bay2);
    line6.appendChild(bay);

    var line7 = row2.insertCell(6);
    let cho: any = document.createTextNode(flights[currentCount].chocks1) + "-" + document.createTextNode(flights[currentCount].chocks2);
    line7.appendChild(cho);

    var line8 = row2.insertCell(7);
    let run: any = document.createTextNode(flights[currentCount].runaway1) + "-" + document.createTextNode(flights[currentCount].runaway2);
    line8.appendChild(run);
}