//Найдите сумму всех кратных n меньше m, m-исключается из кратных. n и m положительные
//Sum of Multiples

function sumMul(n,m){
    sum = 0;
    for ( i = n; i < m; i++) {
      if(i % n === 0) {
        sum += i;
      }
    }
    return sum > 0 ? sum : 'INVALID'
    //тернарные операторы
  //your idea here
  }

  function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  var sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }

  function sumMul(n,m){
    if(m <= 0 || n <= 0 ) {return "INVALID";}
    let res = 0;
    for(let i = 0; i < m; i+= n){
    res += i;}
    return res;
    }