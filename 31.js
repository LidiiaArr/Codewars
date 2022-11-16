//Sum Arrays
//Напишите функцию которая принимает массив чисел и возвращает их сумму
//Если массив не содержит чисел вернуть 0

function sum (numbers) {
    if(typeof numbers[0]==='number'){
        let sumNew = numbers.reduce((acc,cur)=>{
            return acc + cur;
        });
        return sumNew;
    }
    else return 0;
}

//+= сложение с присваиванием


