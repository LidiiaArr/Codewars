//Total amount of points
//Есть футбольная команда которая закончила чемпионат 
//Результаты матчей представлены ввиде массива For example: ["3:1", "2:2", "0:1", ...]
//Напишите функцию которая принимает массив и возвращает результат
//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)

function points(games) {
    let count = 0;
    games.forEach(game => {
        if(game[0] > game[2]) count+=3;
        if(game[0] === game[2]) count+=1;
    });
    return count;
  }


  //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

