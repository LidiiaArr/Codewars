//altERnaTIng cAsE <=> ALTerNAtiNG CaSe


String.prototype.toAlternatingCase = function () {
    let str = '';
    for(let i = 0; i < this.length; i++){
      if (this[i] === this[i].toLowerCase()){ 
        //если первая буква массива равна первой букве массива с нижним регистром
        str += this[i].toUpperCase();
        //то прибавь к пустому массиву эту букву в верхнем регистре
      } else {
        str += this[i].toLowerCase();
        //иначе (если там верхний регистр) делай букву в нижний и дабавляй в массив
      }
    }
    return str;
    
    // Define your method here :)
  }



  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}