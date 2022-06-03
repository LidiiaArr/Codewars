//Get the mean of an array
  //Нужно найти среднее арифметическое в массиве и округлить вниз


function getAverage(marks){
    return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
  }


//К нам приходит массив и нам нужно найти среднее арифметическое округленное вниз до ближайщего целого числа
//Решение в одну строчку с помощью reduce.
//reduce принмает несколько аргументов, acc(аккумулятор) второй это cur(текущее значение)
//К аккумулятору прибавляем текущее значение, а потом то что получилось делим на количество элеентов в массиве
// Для округления используем Math.floor - Это округление вниз
//Math.ceil - округление вверх,  math.round до ближайщего целого
//Оборачиваем в Math.floor 


//Решение без использования встроенных функций  

function getAverage(marks){
    let acc = 0;
    marks.forEach(el => acc += el);
    return Math.floor(acc / marks.length);
  }



//Создаем переменную аккумулятор с изначальным значением 0
//После делаем цикл forEach.
//Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//Когда мы будем идти по циклу, нужно будет увеличивать аккамулятор на текущее значение, а после цикла поделить количество элементов в  массиве.
//Назовем текущий элемент el и внутри цикла будет аккамулятор складывать с текущим элеметом
//После этого ретерн и в нем есть сумма в аккумуляторе и мы разделим ее на длинну массива 
// Для округления используем Math.floor - Это округление вниз