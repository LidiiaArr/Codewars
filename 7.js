//Hello, Name or World!

function hello(name) {
    if ( typeof name === "undefined" || name.length === 0) {
      //typeof name === "undefined" проверка на то что переменной присвоили значение
      return `Hello, World!`;
      } else {
    var nameArray = name
    var result = 'Hello, ' + nameArray[0].toUpperCase() + nameArray.slice(1).toLowerCase() + '!';
    return result;
        }
  }

  function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
      //str.substring(indexA[, indexB]) извлекает символы, 
      //начиная с индекса indexA до, но не включая, индекс indexB
    } else {
      return "Hello, World!";
    }
  }




  const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;


