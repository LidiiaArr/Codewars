//Name on billboard
//На билборде за каждую буквы наужно заплатить 30 фунтов если не передана цена
//Посчитать цену за имя на билборде за пробелы плоти
//* нельзя использовать

function billboard(name, price = 30){
  
    const arr = name.split("");
    if(price) {
      const y = Math.imul(arr.length, price);
      return y;
    } else {
      const w = Math.imul(arr.length, 30);
      return w;
    }
    
 } 

 describe("Basic tests",() =>{
    Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
    Test.assertEquals(billboard("Abishai Charalampos"), 570);
    Test.assertEquals(billboard("Idwal Augustin"), 420);
    Test.assertEquals(billboard("Hadufuns John",20), 260);
    Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
    Test.assertEquals(billboard("Claude Miljenko"), 450);
    Test.assertEquals(billboard("Werner Vígi",15), 165);
    Test.assertEquals(billboard("Anani Fridumar"), 420);
    Test.assertEquals(billboard("Paolo Oli"), 270);
    Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
    Test.assertEquals(billboard("Simon Eadwulf"), 390);
    })

    function billboard(name, price = 30){
        let r = 0;
        for( let i=0; i < name.length; i++){
            r += price;
        }

        return r;
     } 
    