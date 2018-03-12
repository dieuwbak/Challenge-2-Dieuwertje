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
    var hour = today.getHours();

	console.log(hour);

    if (hour <= 15) {
    	document.body.style.backgroundColor = 'red';
    }
    else {
    	document.body.style.backgroundColor = 'green';
    }
}
