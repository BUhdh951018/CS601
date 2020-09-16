// Question 14


// Definition (constructor)
function Advertiser(ownerId) {
    this.ownerId = ownerId;
}

// Gets the time
Advertiser.prototype.getTime = function() {
    return Date.now();
}


//Typescript
class Advertiser{
    ownerId: number = 0;

    // Constructor
    constructor(ownerId: number){
        this.ownerId = ownerId;
    }
    // Gets the time
    getTime(){
        return Date.now();
    }
}
