//Find Maximum and Minimum Values of a List



var min = function(list){
    minResult = list[0]
  for( i=1 ; i < list.length; i++){
    if(minResult > list[i]) minResult = list[i]
  }
  return minResult
}

var max = function(list){
      maxResult = list[0]
      for( i=1 ; i < list.length; i++){
        if(maxResult < list[i] ) maxResult = list[i]
      }
      return maxResult
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}