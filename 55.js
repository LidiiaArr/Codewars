//Is the string uppercase?
//Нужно написать строковый метод


//Если мы вызываем функцию над чем то "C".isUpperCase
//то это расширение прототипа

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === String(this);
  }