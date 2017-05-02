function Beverage(name, temperature) {
    this.name = name;
    this.temperature = temperature;
}

Beverage.prototype.drink = function () {
    console.log("I am drinking " + this.name);
}


function Coffee(type) {
    //Initialize local coffee properties
    Beverage.call(this, "coffee", "hot");
    this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function () {
    console.log("Sipping some awesome " + this.type + " " + this.name);
}


var water = new Beverage("water", "cold");
var coffee = new Coffee("Bold dark roast");