//Enumerable Magic #25 - Take the First N Elements


function take(arr, n) {
    return arr.slice(0, n)
}

function take(arr, n) {
    return arr.filter((elem, i) => i < n )
}

function take(arr, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        if (i < n && i < arr.length) {
            res.push(arr[i]);
        }
    }
    return res;
}