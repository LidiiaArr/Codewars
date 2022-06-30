//How good are you really?
//приходит массив оценки учеников в классе
//второй  аргшумент оценка отдельного ученика
//нужно посчитать лучше ли его оценка чем средняя оценка по классу


function betterThanAverage(classPoints, yourPoints) {
    accum=classPoints.reduce((acc, el)=>acc + el, 0);
    middle=accum / classPoints.length;
    if (middle > yourPoints) {
        return false;
    }
    else return true;
  }

   
  //считаем среднее арифметическое в массиве 
  //потом сравниваем меньше или больше оценки одного студента
  //если больше возвращаем true 
