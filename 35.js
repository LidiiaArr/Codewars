//Sum of two lowest positive integers
//Приходит массив минимум 4 числа без дробных и отрицательных


function sumTwoSmallestNumbers(numbers) {
   
    sortedNumbers = numbers.sort((a,b)=>a-b);
    return sortedNumbers[0] + sortedNumbers[1];
    
  }

  function sumTwoSmallestNumbers(numbers) {  
    function sortNum(a,b){ //нужно отстортировать от меньшего к большему допустим a=5 b=1
        switch (a>b){ 
            case true:      //поэтому нам нужно менять местами a и b 
                return 1;
            case false:     
                return -1;
            default:
                return 0;   
        }
    }
    sortedNumbers = numbers.sort(sortNum);

       return sortedNumbers[0] + sortedNumbers[1];
   }


  describe("Your function", function() {
    it("should work for basic tests", function() {
      assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
      assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
      assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
      assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
      assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
    });
  })