//N-th Power
//Дается массив положительных чисел и не отрицательное число n
//Найти n-ную степень элемента массива с индексом N
//если такого числа нет вернуть -1


function index(array, n){
    for( i=0; i < array.length; i++ ){
        if(i===n){
            const arrN=array[i]**n;
            return arrN;
        }
    }
    return -1;
}


function index(arr, n){
    const el = arr[n];
    if(!el) return -1;
    return el**n;
}