function elastic(progress) {
  return Math.pow(2, 10 * (progress-1)) * Math.cos(20*Math.PI*1.5/3*progress)
}