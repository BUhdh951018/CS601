import $ = require("jquery");

class Averager {
    private CLICK:any = "click";
    private values:number[] = [];

    constructor() {
        $("#getAverage").on(this.CLICK, (event:MouseEvent) => {
            this.findAverage();
        });

        
        $("#addBtn").on(this.CLICK, (event:MouseEvent) => {
            const val:String = $("#target").val() as string;
            const _number:Number = new Number(val);
            this.addValue(_number.valueOf());
        });
        $("#reset").on(this.CLICK, (event:MouseEvent) => {
            this.values = [];
            $("p").html("All data values have been removed.");
        });
    }

    public addValue(value:number):void {
        if ( value >= 0 ) {
            this.values.push(value);
            $("p").html(`We have... ${this.values.join(",")}`);
        }
        $("#target").val("");
    }

    public findAverage():void {
        if (this.values.length > 0) {
            let result = this.values.reduce((accumulator, value) => accumulator + value); 
            $("p").html(`The average is: ${(result/this.values.length).toFixed(2)}`);
        }
    }
}

export {Averager};