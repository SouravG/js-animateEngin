function makeEaseOut(delta) {  
  return function(progress) {
    return 1- delta(1 - progress)
  }
}