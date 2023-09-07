//Sum of the first nth term of Series

function SeriesSum(n){
    if(!n) return "0.00"
    let sum = 1, j = 4;
    for(let i = 1 ; i < n; i++){
        sum += 1/j;
        j += 3;
    }
    return sum.toFixed(2);
}
//метод toFixed() форматирует числовое значение в строковое, сохраняя при этом указанное количество десятичных знаков



//другие решения
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
  }
