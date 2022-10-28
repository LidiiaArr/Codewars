//Sum of differences in array
//Сумировать разницу между двумя элементами массива, после сортировки от большего к меньшему


function sumOfDifferences(arr) {
    const sortArr = arr.sort((a,b)=>b - a);
    
    let sum = 0;
    for (let i= 0; i < sortArr.length-1 ; i++){
        sum += arr[i] - arr[i + 1];
    }
  return sum;
}