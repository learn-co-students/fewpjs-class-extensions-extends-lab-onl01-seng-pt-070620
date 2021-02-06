// Your code here
class Polygon {
    constructor(array) {
      this.array = array
    }
  
    get countSides() {
      return this.array.length
    }
  
    get perimeter() {
      return this.array.reduce((memo, side ) => {
        return memo + side;
      })
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if((this.array[1] + this.array[2]) > this.array[0]) {
        return true
      } else {
        return false
      }
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      let n = this.array
      if (n[0] === n[1] && n[1] === n[2] && n[2] === n[3]) {
        return true
      } else {
        return false
      }
    }
  
    get area() {
      return this.array[0] ** 2
    }
  }