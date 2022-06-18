//Find the missing element between two arrays
//Задача найти пропушенный элемент между двумя массивами
//К нам приходят два массива первый и второй массив мы должны вернуть отсутствующий элемент
//Элемент пропушен во втором массиве

function findMissing(arr1, arr2) {
    let index;
    for ( let i = 0; i < arr1.length; i++){
        index = arr2.indexOf(arr1[i])
        if (index > -1){
            arr2.splice(index , 1);
        } else {
            return arr1[i];
        } 
    }
    }
  
  



  //Будем идти по первому массиву и проверять есть ли этот элемент во втором массиве
  //И если мы его найдем то мы будем со второго массива массива удалять
  //Удалять так как массивы не являются точной копией друг друга
  //Cоздаем цикл for для иттерации 
  //Берем элемент в первом массиве и исчем его во втором массиве и если он там находится, значит со второго массива удаляем
  //Если он там не находиться, то мы возвращаем это значение как пропущенный элемент
  //If с блоком else, внутри else ,будем возвращать
  //Если текущий элемент в первом массиве, его нужно найти во втором массиве
  //Таким образом узнаем включается ли этот элемент туда или нет 
  //Используем метод includes//
  //Если элемент там есть то мы будем его удалять
  //Удалять будем по индексу, поэтому нужно знать его индекс 
  //создадим переменную index, и будем искать index внутри второго массива
  //И если индекс находиться, сразу будем заходить в if и удалять его
  //Внутри if делаем присваивание 

 // Метод indexOf() сравнивает искомый элемент с элементами в массиве, и если такой есть возвращает его индекс. Если элемента с таким значением нет возвращает -1.
  //Если index найден сохраняем этот индекс, если index не найден, то получеам -1, и внутри if можно легко сделать проверку что текущий индекс - 1 то он найден
  //Если найден возвращаем в else
  //Если индекс больше -1, тогда нужно зайти во второй массив и удалить его 
//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. массив.splice(индексЭлементаКоторыйУдалиться , сколькоЭлементовУдалить)



//Сделали цикл начинаем идти по первому массиву
//В индекс записываем индекс элемента который мы нашли 
// Если мы его нашли со второго массива его удаляем 