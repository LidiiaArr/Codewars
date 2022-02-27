function abbrevName(name){
    var nam = name.split(' ');
        //split('разделитель') разбивает строку в массив по разделителю
    return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
    //метод .charAt вовращает символ с указанным индексом .toUpperCase преобразует в верхний регистр
  }
//Другое решение без метода .charAt
  function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }