//Find out whether the shape is a cube
//Выяснить, является ли фигура кубом
//Зная объем и одну из сторон


var cubeChecker = function(volume, side){
    if(volume <= 0 || side <= 0) return false;

    return Math.cbrt(volume)=== side ? true : false;
  };




  //Метод Math.cbrt() возвращает кубический корень числа