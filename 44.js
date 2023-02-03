//Check same case


function sameCase(a, b){

    const aF = a.charCodeAt(0);
    const bF = b.charCodeAt(0);
    let aReg;
    let bReg;

if( aF >= 65 && aF <= 90 ){
    aReg = "u";
} else if(aF >= 97 && aF <= 122 ){
    aReg = "l";
} else {
    return -1;
}

if( bF >= 65 && bF <= 90 ){
    bReg = "u";
} else if(bF >= 97 && bF <= 122 ){
    bReg = "l";
} else {
    return -1;
}

return aReg === bReg ? 1 : 0;
    
    }


    
    function sameCase(a, b){
        const alpha = 'abcdefghijklmnopqrstuvwxyz'
        if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
        
        const checkCase = x => {
          if(x === x.toLowerCase()) return 'lower'
          if(x === x.toUpperCase()) return 'upper'
        }
      
        return checkCase(a) === checkCase(b) ? 1 : 0
      }

