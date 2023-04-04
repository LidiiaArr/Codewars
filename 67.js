//Will there be enough space?

function enough(cap, on, wait) {
    return (cap - on) >= wait ? 0 : wait - (cap - on);
  }

  function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }