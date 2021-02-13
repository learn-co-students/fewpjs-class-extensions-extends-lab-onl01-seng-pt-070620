// Your code here
class Polygon {
    constructor(integers) {
        this.integers = integers;
    }

    get countSides() {
        return this.integers.length 
    }

    get perimeter() {
        return this.integers.reduce((a, b) => a + b, 0)
    }
};

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return;
            let side1 = this.integers[0]
            let side2 = this.integers[1]
            let side3 = this.integers[2]
            return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
    }
};

class Square extends Polygon {
    get area() {
        return this.integers[0] * this.integers[0]
    }

    get isValid() {
        if (this.countSides !== 4) return;
            let side1 = this.integers[0]
            let side2 = this.integers[1]
            let side3 = this.integers[2]
            let side4 = this.integers[3]
            return (side1 === side2) && (side1 === side3) && (side1 === side4)
    }
};