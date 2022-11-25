//Find the position!

function position(letter){
    const i ='abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1;
    return `Position of alphabet: ${i}`;
}

//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
//var array = [2, 5, 9];
//array.indexOf(2);     // 0
//array.indexOf(7);     // -1
//array.indexOf(9, 2);  // 2











describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(position("a"),"Position of alphabet: 1");
  Test.assertEquals(position("z"),"Position of alphabet: 26");
  Test.assertEquals(position("e"),"Position of alphabet: 5");
    });
  });