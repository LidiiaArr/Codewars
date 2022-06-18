//Simple multiplication
//Нужно умнажать число на 8 если четное и на 9 если нечетное

function simpleMultiplication(number) {
    if( number % 2 === 0 ){
        return number * 8;
    } else {
        return number * 9;
    }
}
//Проверка четное или нечетное