//Mixins Pattern

function Person(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}


var speaker = {
    speak: function () {
        return this.name + " is speaking";
    }
};

var mover = {
    walk: function () {
        return this.name + " is walking";
    },
    run: function () {
        return this.name + " is running";
    }
}

var arithmatic = {
    add: function () {
        return this.name + " is adding numbers";
    },
    multiply: function () {
        this.name +  " is multiplying numbers";
    }
}


//Using Jquery to mixins
$.extend(Person.prototype, speaker, mover, arithmatic); //Unique property is added
$.extend(Dog.prototype, speaker, mover);


function extend(target) {
    if (!arguments[1]) {
        return;
    }
    
    for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
        var source = arguments[ii];
        
        for (var prop in source) {
            if(!target[prop] && source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
            }
        }
    }
}
