class Polygon {

    constructor(integers) {
        this.integers = integers
    }

    get countSides() {
        const numberOfSides = this.integers.length;
        return numberOfSides;
    }

    get perimeter() {
        const sum = this.integers.reduce((a, b) => a + b, 0)
        return sum;
    }

}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.integers[0];
        const side2 = this.integers[1];
        const side3 = this.integers[2];
        if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const side1 = this.integers[0];
        const side2 = this.integers[1];
        const side3 = this.integers[2];
        const side4 = this.integers[3];
        if (side1 == side2 && side1 == side3 && side1 == side4){
            return true;
        } else {
            return false;
        }
    }

    get area() {
        const side1 = this.integers[0];
        const side2 = this.integers[1];
        let area = side1 * side2;
        return area;
    }
}