const questionNumber = 'Question 11';


const MAX_AGE = 99;
let myPromise = new Promise(function(res, rej){
    if(currentAge > MAX_AGE){
        const now = 0;
        resolve("You are too old");
    }else{
        const me = Date.now();
        rej("You are " + (100 - me));
    }
})