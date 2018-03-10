var beating = document.getElementById('clock');


var tl1 = new TimelineMax();
tl1.to(beating, 1, {height: 310, width: 310, ease: Sine.easeIn})
  .to(beating, 1, {height: 300, width: 300, ease: Sine.easeOut});


function background() {
	if (hour<18) {
		document.getElementsByTagName("html").style.background-image = 'url(background/evening.jpg)'
	}
}