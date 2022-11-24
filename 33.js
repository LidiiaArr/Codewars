//Find Multiples of a Number
//Дается два числа integer, limit
//В этом простом упражнении вы создадите программу, которая принимает значение , integer и возвращает список его кратных до другого значения, limit . 
//Если limitкратно integer, оно также должно быть включено. В функцию всегда будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет выше основания.


function findMultiples(integer, limit) {
    let a = [];
    a.push(integer);
    for (i=integer+integer; i<= limit; i+=integer){
      a.push(i);
    }
    return a;
}


it("Basic Tests",() =>{
    assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
    assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
    assert.sameOrderedMembers(findMultiples(5, 7), [5])
    assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
  });