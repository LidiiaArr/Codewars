//Are they the "same"?




function comp(array1, array2){
    if(array1 === null || array2 === null) return false;
    for(let i = 0; i < array2.length; i++){
        const idxA1 = array1.indexOf( Math.sqrt(array2[i]))
        if(idxA1 === -1) return false;
        array1[idxA1] = null;
    }
    return true;
}












