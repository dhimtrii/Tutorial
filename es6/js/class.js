class Shape {

    constructor(shapeName, dimension) {
        this.shapeName = shapeName;
        this.dimension = dimension;
        this.shapes = ['rectangle', 'square', 'circle'];
    }
    
    area () {
        if(!this.validateShape()) {
            if(this.shapeName == 'rectangle') {
                return 2 * (this.dimension[0] + this.dimension[1]); 
            } else if(this.shapeName == 'square') {
                return this.dimension[0] * this.dimension[0];
            } else {
                return Math.PI * (this.dimension[0] * this.dimension[0]);
            }
            return false;
        }
        return false;
    }
    
    validateShape() {
        return this.shapes.indexOf(this.shapeName) == -1;
    }
}


let myShape = new Shape('circle', [10]);

console.log(myShape.area());



