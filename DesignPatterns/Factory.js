function Factory() {
    this.createEmployee = function (type) {
        
        var employee;
        
        if (type === "fulltime") {
            employee = new Fulltime();
        } else if (type === "parttime") {
            employee = new Parttime();
        } else {
            employee = new Contract();
        }
    }
}


var Fulltime = function () {
    this.hourly = "$12";
}

var Parttime = function () {
    this.hourly = "$11";
}

var Contract = function () {
    this.hourly = "$10";
}


function run() {
    
    var employee = [];
    var factory = new Factory();
    
    employee.push(factory.createEmployee("fulltime"));
    employee.push(factory.createEmployee("parttime"));
    employee.push(factory.createEmployee("contract"));
}