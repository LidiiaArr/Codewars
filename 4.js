//Write a function called repeatStr which repeats the given string string exactly n times.




function repeatStr (n, s) {
    let str = '';
    for ( let i = 0; i < n; i++){
      str +=s
    //создаем цикл фор, к пустой переменной str будет 
    //сложение с присваиванием пока i меньше n
    }
    return str;
  }

  //Dnjhjt
  function repeatStr (n, s) {
    return s.repeat(n);
    //myString.repeat(1) возвращает строку с нужным количеством раз
    
  }