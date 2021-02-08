class Polygon{
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce(function(res, i){ return res + i; });
    }
}

class Triangle extends Polygon{
    
    get isValid(){
        const x = this.sides[0];
        const y = this.sides[1];
        const z = this.sides[2];
        // (x + y <= z || y + z <= x || x + z <= y) ? false : true;
        if(x + y <= z || y + z <= x || x + z <= y){
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon{
    
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        return this.sides[0] * this.sides[0];
    }
}