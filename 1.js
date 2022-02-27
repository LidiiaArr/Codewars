//Создать функцию которая принимает не отрицательное число n
//и возвращет список всех степеней числа 2 от 0 до n (включительно)


function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
      //методом push присодениняем к массиву,числа возведенные в степень методом Math.pow
    }
    return result;
  }
  

  //2-ое решение с оператором **
  function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(2**i);
      //методом push присодениняем к массиву,числа возведенные в степень методом Math.pow
    }
    return result;
  }
  
  