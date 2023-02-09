//Sum without highest and lowest number




function sumArray(array) {
    if(!array) return 0
    if(array.length === 0 || array.length === 1) return 0
    let resultCur = array.reduce((acc, cur)=>acc + cur);
    let min = Math.min(...array);
    let max = Math.max(...array);
    return resultCur - (max + min);
}