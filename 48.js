//Freudian translator


function toFreud(string) {
    if (string.length === 0 ) return "";
    let result = [];
    let curRes = string.split(" ");
    for(let i=0; i < curRes.length; i++ ){
        result.push("sex");
    }
    return result.join(" ");

}


const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')
