//Convert to Binary
//Приходит положительное целое число, нужно написать функцию которая будет возвращать
//Это число в двоичном формате



function toBinary(n){
    return Number(n.toString(2));
  }

//Для решения задачи есть функция toString 
//Но результатом этого метода будет строка
//Для того чтобы сделать строку числом есть метод Number()
//или использовать плюс , +n.toString(2)