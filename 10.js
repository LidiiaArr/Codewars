//Find the Remainder

function remainder(n, m){
  if ( n > m && m === 0 ) {
    return NaN;
    } else if ( m > n && n === 0 ) {
      return NaN;
      
  } else if ( n > m ) {
 return   n % m;
  } else {
  return  m % n;
  } 
    // Divide the larger argument by the smaller argument and return the remainder
}


function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var min = Math.min(a,b);
  var max = Math.max(a,b);

  return min ? max % min : NaN;
}
