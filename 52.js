//L1: Set Alarm

function setAlarm(employed, vacation){
    if (employed === true && vacation===false){
        return true;
    } else {
        return false;
    }
}

const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation){
    return employed && !vacation;
  }

  function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }