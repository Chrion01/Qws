const more = document.getElementById('more');
const extra2 = document.createElement('p');
extra2.id = 'clock'
more.appendChild(extra2);
function time(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(time, 1000);
	
}
time();

