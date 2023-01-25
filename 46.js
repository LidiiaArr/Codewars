//Enumerable Magic #20 - Cascading Subsets


function eachCons(array, n) {
    const r = [];
    for( let i = 0 ; i<= array.length-n ; i++) {
        const chunk = [];//будет обнуляться на каждый оборот
      for(let j = i; j < i + n; j++){
                chunk.push(array[j]);
      }
      r.push(chunk);
    }
  return r;
  }

  function eachCons(array, n) {
    let res = [];
    
    for(let i = 0; i < array.length; i++){
      res.push(array.slice(i,i + n));
    }
    
      return res.filter(e => e.length === n);
  }


  function eachCons(array, n) {
    let cascadingSubset = [];
    for( i = 0; i <= array.length - n; i++){
      cascadingSubset.push(array.slice(i, i + n ));
    }
      return cascadingSubset;
  }