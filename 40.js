//Short Long Short
//Приходят две строки короткая и длинная ретурнуть строку КороткаяДлиннаяКороткая

function solution(a, b){

if(a.length > b.length){
    return `${b}${a}${b}`;
} else {
    return `${a}${b}${a}`;
}

}


//("1", "22") --> "1221"
//("22", "1") --> "1221"