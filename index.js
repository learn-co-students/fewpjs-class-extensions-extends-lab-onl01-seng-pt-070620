class  Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
       let count = this.array.length
       return count
    }
    get perimeter(){
        let count = 0
        for(let i = 0; i < this.array.length; i++){
            count += this.array[i]
        }
        return count
    }

}

class  Triangle extends Polygon{
    get isValid(){
        if (Array.isArray(this.array)){
            if (this.countSides === 3){
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
            }
        }
        
      }
}

class Square extends Polygon{
    get isValid(){
        if (Array.isArray(this.array)){
            if(this.countSides === 4){
                let side1 = this.array[0]
                let side2 = this.array[1]
                let side3 = this.array[2]
                let side4 = this.array[3]
                return((side1===side2)&&(side1===side3)&&(side1===side4))
            }
        }
    }
    get area(){
      if (this.isValid){
          return this.array[0] * this.array[0]
      }
    }

}