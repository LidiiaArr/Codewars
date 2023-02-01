//How much water do I need?


function howMuchWater(water, load, clothes){

    if(clothes > load*2) return ('Too much clothes');
    if(clothes < load) return ('Not enough clothes');

    let result = water;
    let difference = clothes - load;

    for( let i = 1; i <= difference; i++ ){
        result = result + (result*0.1);
    }
    return Number(result.toFixed(2));

    // Insert your brilliant code here
  }