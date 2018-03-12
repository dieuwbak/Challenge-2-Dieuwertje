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


function changeBackground() {
	var today = new Date();
    var hour = today.getSeconds();


    if (hour >=18 && hour <=22) {
    	document.body.style.backgroundImage = 'url(background/evening.jpg)';
    }
    else if (hour >=23 || hour <=5) {
    	document.body.style.backgroundImage = 'url(background/night.jpg)';
    }
    else if (hour >=6 && hour <=11) {
    	document.body.style.backgroundImage = 'url(background/morning.jpg)';
    }
	else {
    	document.body.style.backgroundImage = 'url(background/day.jpg)';
    }
}
