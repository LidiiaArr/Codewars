//To square(root) or not to square(root)

function squareOrSquareRoot(array) {
    let newArray = array.map( (el) => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el * el );
    return newArray;  
  }
  