/***
*
* Singleton class in ES5
*
**/
var Singleton = (function () {
    
    var instance;
    
    function CreateInstance() {
        var object - new Object('Sample Object');
        return object;
    }
    
    return {
        GetInstance: function () {
            if (!instance) {
                instance = CreateInstance();
            }
            return instance;
        }
    }
})();


function run() {
    
    var instance1 = Singleton.GetInstance();
    var instance2 = Singleton.GetInstance();
    
    console.log( "Same Instance: " + (instance1 === instance2));
}






/***
*
* Singleton class in ES5
*
**/

let instance = null;

Class Cache {
    
    constructor() {
        if (!instance) {
            instance = this;
        }
        
        this.time = new Date();
        
        return instance;
    }
    
}


let cache = new Cache();
console.log(cache.time);


setTimeout( function () {
    let cache = new Cache();
    console.log(cache.time);
}, 4000);




let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {

    /**
     * @param enforcer
     */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }
    }

    /**
     * @returns Singleton
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Singleton(singletonEnforcer);
        }
        return this[singleton];
    }

}
