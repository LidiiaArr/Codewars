//Race Ceremony
//Построить подиум для победителей
//вы находитесь в богатом лесом районе, количество блоков всегда не менее 6.
//Первое место является самым высоким, а второе место выше третьего. Также обратите внимание, что платформы расположены как 2-я - 1-я - 3-я.


function racePodium(blocks){

      let st2 = Math.ceil(blocks / 3);
      let st1 = st2+1;
      let st3 = blocks - (st1 + st2);
        if(st3 === 0) {
          st3 = 1;
          st2 = st2 - 1;
        }
      const x = [];
      x.push(st2, st1, st3);
      return x;
  
  }

  //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.


describe("Tests", function() {
    it("Fixed tests", function() {
      dotest(11, [4, 5, 2]);
      dotest(6, [2, 3, 1]);
      dotest(10, [4, 5, 1]);
      dotest(100000, [33334, 33335, 33331]);
      dotest(7, [2, 4, 1]);
      dotest(8, [3, 4, 1]);
    });
  });