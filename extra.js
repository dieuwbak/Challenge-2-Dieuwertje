var timeline = new TimelineMax({repeat: -1});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  
	return i;
}



var animation = document.getElementById('clock');	

timeline.call(startTime)
		.call(changeBackground)
		.to(animation, 0.7, {fontSize: '20vw', ease: Bounce.easeIn})
		.from(animation, 0.3, {fontSize: '19vw', ease: Sine.easeIn});

 		
/*var flip = new TimelineMax({repeat : -1});

tl2.from('#clock', 0.7, { top: -100, ease: Bounce.easeOut})
	.to('#clock', 0.3, { opacity: 0})*/



function changeBackground() {
	var today = new Date();
    var hour = today.getHours();


    if (hour >=7 && hour <=11) {
    	document.body.style.backgroundImage = 'url(background/morning.jpg)';
    	document.getElementById('message').innerHTML = "Morning, rise and shine!";
    }
	else if (hour >=12 && hour <=18) {
    	document.body.style.backgroundImage = 'url(background/day.jpg)';
    	document.getElementById('message').innerHTML = "It's a beatiful day";
    }
    else if (hour >=19 && hour <=22) {
    	document.body.style.backgroundImage = 'url(background/evening.jpg)';
    	document.getElementById('message').innerHTML = "Have a good evening";
    }
    else {
    	document.body.style.backgroundImage = 'url(background/night.jpg)';
    	document.getElementById('message').innerHTML = "Sweet dreams";
    }
}

