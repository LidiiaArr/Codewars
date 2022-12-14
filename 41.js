//Help the Elite Squad of Brazilian forces BOPE
//Вы получите оружие и количество улиц
//нужно вычислить необходимое количество магазинов
//PT92 - 17 bullets
//M4A1 - 30 bullets
//M16A2 - 30 bullets
//PSG1 - 5 bullets

function magNumber(info){
  switch(info[0]){
    case "PT92":
        return Math.ceil((info[1]*3)/17);
    case "M4A1":  
        return Math.ceil((info[1]*3)/30);
    case "M16A2":  
        return Math.ceil((info[1]*3)/30); 
    case "PSG1" :
        return Math.ceil((info[1]*3)/5);
    default:
        return 0;    
  }
}

function magNumber(info){
    const dict = {"PT92": 17, "M4A1": 30, "M16A2": 30, "PSG1": 5};
    return Math.ceil(info[1] * 3 / dict[info[0]]);
  }

const testCases = [
    // input, expected -- feel free to add more cases if needed
    [["PT92", 6], 2],
    [["M4A1", 8], 1],
    [["M16A2", 19], 2],
    [["PSG1", 31], 19],
    [["PT92", 19], 4],
];


