import * as React from "react";

export class Averager extends React.Component {
    
    numberList:string[] = [];
    newValue:string = '0';

    addNumber = () => {
        let currentValue:string = this.newValue;
        this.numberList.push(currentValue);
        alert("You added " + currentValue + " to the list!");
    }

    getAverage = () => {
        let numberList:string[] = this.numberList;
        let i:number = 0;
        let sum:number = 0;

        for (i = 0; i < numberList.length ; i++){
            let asInt:number = +numberList[i];
            sum = sum + asInt;
            console.log(sum);
        }
        alert(sum/numberList.length);
        console.log(sum/numberList.length);
        return sum/numberList.length;
    }

    reset = () => {
        this.numberList = [];
        console.log(this.numberList);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.newValue = event.target.value;
    }

    handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        let emptyString:string = "";
        event.target.value = emptyString;
    }

    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>This will average a list of numbers you provide</legend>
                        <input type="text" id="inputNumber" onChange={this.handleChange} onFocus={this.handleFocus}/>
                        <button type="button" onClick={this.addNumber}>Add Number</button>
                        <button type="button" onClick={this.getAverage}>Get Average</button>
                        <button type="button" onClick={this.reset}>Reset</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}