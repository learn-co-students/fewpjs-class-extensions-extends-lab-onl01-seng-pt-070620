class Polygon {
    constructor(array) {
        this.sides = array
    };

    get countSides() {
        return this.sides.length
    };

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side, 0)
    };
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            return (this.sides[0] < (this.sides[1] + this.sides [2])) && (this.sides[1] < (this.sides[0] + this.sides [2])) && (this.sides[2] < (this.sides[1] + this.sides [0]))

        }
        else {
            return false
        }
    };
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every( (side, i, array) => side === array[0] )
    };

    get area() {
        let side1 = this.sides[0];
        
        return side1 * side1
    };
}