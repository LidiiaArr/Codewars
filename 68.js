//Beginner Series #2 Clock


function past(h, m, s){
    return (h*3600000) + (m*60000) + (s*1000);
    //#Happy Coding! ^_^
  }

  function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
  }