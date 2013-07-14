function animate(opts) {

  
  var start = new Date
   

  var id = setInterval(function() {

    var timePassed = new Date - start

    var progress = timePassed / opts.duration


    if (progress > 1) progress = 1

    
    var delta = opts.delta(progress)

    opts.step(delta)

    
    if (progress == 1) {
 
     clearInterval(id)
    }

  },
 opts.delay)

  
}

///////////////////////////////////

function move(element, delta, delay ,duration, direction, to) {

   
  animate({
    delay: delay,
    duration: duration , // 1 sec by default
    delta: delta,
    step: function(delta) {
      element.style[direction] = to*delta + "px"   
    }
  })
   
}