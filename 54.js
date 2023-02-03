//Count by X

function countBy(x, n) {
    let z = [];
    for (let i = x ; z.length < n ; i+= x){
      z.push(i);
    }
    return z;
}

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
//JavaScript метод .from()ECMAScript 2015 преобразует и возвращает новый массив из массивоподобного, или итерируемого объекта.

