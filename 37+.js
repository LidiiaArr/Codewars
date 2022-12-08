//Nice Array


function isNice(arr){
    if(!arr.length) return false;
    const voc = {};
    arr.forEach(n => voc[n] = 1);
    return arr.every(el => voc[el-1] || voc[el+1]);
}

function isNice(arr){
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
    }
    if (counter == arr.length && arr.length != 0) return true
    return false
}

function isNice(arr){
    let niceCount = 0;
      for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
          if (arr[i] === arr[j]-1 || arr[i] === arr[j]+1){
            niceCount++;
            break;
          }
        }
      }
      return (niceCount === arr.length && arr.length !== 0)
    }

    function isNice(arr) {
        if(arr.length === 0) return false;
        const sadNumbers = arr.filter((num) => {
          return !arr.includes(num + 1) && !arr.includes(num - 1);
        });
        return sadNumbers.length === 0;
      }

// forEach каждый елемент и в словарь запишет 
//[ 2, 10, 9, 3 ] - arr
//{ '2': 1, '3': 1, '9': 1, '10': 1 } - voc
//Метод every() вызывает переданную функцию callback один раз для каждого элемента, 
//присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт ложное значение 
//(значение, становящееся равным false при приведении его к типу Boolean). Если такой элемент найден, 
//метод every() немедленно вернёт false. В противном случае, если callback вернёт true для всех элементов массива, метод every() вернёт true.












































function isNice(arr){
    const newArr=[];
    arr.forEach(elem=> {
        for (i = 0; i < arr.length ; i++){
            switch (elem === arr[i] + 1 || arr[i] - 1){
                case true:
                    newArr.push(elem)
                case false:
                    return;
                default:
                    return    
            }

   }});
     
     console.log(newArr);
     
   return newArr.length === arr.length;
}





function isNice(arr){
    const newArr=[];
   arr.forEach(el=>{
   for (i = 0; i < arr.length ; i++){
       if(el === arr[i + 1] || arr[i - 1]){
           newArr.push(el);
       }else{
         return
       }
   }});
     console.log(newArr.length)
   return newArr.length === arr.length;
   }



function isNice(arr){
    const newArr=[];
    arr.forEach(elem=> {
        for (i = 0; i < arr.length ; i++){
            switch (elem === arr[i] + 1 || arr[i] - 1){
                case true:
                    newArr.push(elem)
                case false:
                    return;
                default:
                    return    
            }

   }});
     
     console.log(newArr);
     
   return newArr.length === arr.length;
   }


   function isNice(arr){
    console.log(arr);

 const newArr=[];
 arr.forEach(elem=> {
     for ( i = 0; i < arr.length ; i++ ){
         if(elem === arr[i] + 1 || arr[i] - 1){
           console.log(elem);
         }
         }
        }
);
  
  console.log(newArr);
  
return newArr.length === arr.length;
}