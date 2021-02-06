    class Polygon {
        constructor(arrayOfIntegers) {
            this.arrayOfIntegers = arrayOfIntegers
        }

        get countSides() {
            return this.arrayOfIntegers.length
        };

        get perimeter() {
            let totalSides = this.arrayOfIntegers.reduce((acc, curr) => acc + curr);
            return totalSides
        };

    }

    class Triangle extends Polygon {
        get isValid() {
            for (let n = 0; n < this.arrayOfIntegers.length; n++) {
                let a = this.arrayOfIntegers[0];
                let b = this.arrayOfIntegers[1];
                let c = this.arrayOfIntegers[2];
                if (a + b > c && a + c > b && b + c > a) {
                    return true
                }
                else 
                { return false}
            }
        }
    }

    class Square extends Polygon {
        get isValid() {
            for (let n = 0; n < this.arrayOfIntegers.length; n++) {
                let a = this.arrayOfIntegers[0];
                let b = this.arrayOfIntegers[1];
                let c = this.arrayOfIntegers[2];
                let d = this.arrayOfIntegers[3];
                if (a === b && b === c && c === d && a === d)
                    return true
                else 
                 return false 
            };
        }

        get area() {
                let squareArea = this.arrayOfIntegers[0] * this.arrayOfIntegers[1];
                return squareArea
        };
    }