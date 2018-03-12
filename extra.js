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
		.to(animation, 0.5, {fontSize: '3em'})
		.from(animation, 0.5, {fontSize: '2.7em'});
