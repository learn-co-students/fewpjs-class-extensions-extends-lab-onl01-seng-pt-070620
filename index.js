class Polygon {

     constructor(arr){
        this.sides = arr
     }

    get countSides(){
        return this.sides.length;
    }
    
    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
       return this.sides.reduce(reducer )
    }
}

class Triangle extends Polygon {

    get isValid(){
        const [a,b,c] = this.sides
        return (a + b > c && b + c > a) ? true : false
    }
}

class Square extends Polygon {

    get isValid(){
        const [a,b,c,d] = this.sides
        return (a ===  b && b ===c && c===d) ? true : false
    }

    get area(){
        const [a] = this.sides
        return a** 2
    }
}
