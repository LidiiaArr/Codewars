//Name Shuffler
//Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.



function nameShuffler(str){
const arr = str.split(" ");
const arr2 = arr.reverse();
const strNew = arr2.join(" ");
return strNew;
}


describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(nameShuffler('john McClane'),'McClane john');
      assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
      assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
    });
  });