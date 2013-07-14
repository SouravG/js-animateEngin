function makeEaseInOut(delta) {  
  return function(progress) {
    if (progress < .5)
      return delta(2*progress) / 2
    else
      return (2 - delta(2*(1-progress))) / 2
  }
}