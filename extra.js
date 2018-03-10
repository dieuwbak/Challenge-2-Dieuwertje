var beating = document.getElementById('clock');


var tl = new TimelineMax({repeat:-1});
tl.to(beating, 0.5, {height: 350, ease: Sine.easeIn})
  .to(beating, 0.5, {height: 300, ease: Sine.easeOut});
