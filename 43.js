//Plural
//Нам нужна простая функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, 
//если с этим числом следует использовать множественное число, или false, если нет. 

function plural(n) {
    if(n<1)return true;
    if(n === Infinity ) return true
    if(n === 1) return false
    if(n>1)return true;
}

function plural(n) {
    return n === 1 ? false : true;
  }

  function plural(n) {
    return n !== 1;
  }

//    !== строго не равно


describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(plural(0), true, "Plural for 0");
  Test.assertEquals(plural(0.5), true, "Plural for 0.5");
  Test.assertEquals(plural(1), false, "Plural for 1");
  Test.assertEquals(plural(100), true, "Plural for 100");
  Test.assertEquals(plural(Infinity), true, "Plural for Infinity");
  
    });
  });
