//Student's Final Grade
//Нужно вернуть баллы студентов в зависимости от некоторых условий
//Функция должна вернуть цисло финальное количество баллов
//Есть 4 типа

function finalGrade (exam, projects) {
   if (exam > 90 || projects > 10) {
       return 100;
   }else if (exam > 75 && projects >=5){
       return 90;
   }else if (exam > 50 && projects >=2){
       return 75;
   } else {
       return 0;
   }
  }



//Решаем задачу через if
//Если exam больше чем 90 или projects больше чем 10 возвращаю 100
//Если иначе  exam больше 75 и projects больше чем 5 возвращаю 90
//Если иначе exam больше 50 и projects больше или равно 2 возвращаю 75
//Ноль мы получаем если все остальные случаи не подходят (else)