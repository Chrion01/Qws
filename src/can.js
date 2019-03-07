function can_start(canvas, canContext, msg = 'This is javascript'){
	can_item(msg, canvas, canContext);
	console.log('can start')
}	

function can_item(word, canvas, canContext){
	var state = {canContext : canContext, canvas : canvas, word : word, x : 50, y : 50, xv : 1, yv : 1};
	var t = setInterval(move, 10, state);
	
}
function move(state){
	if(state['x'] + state['canContext'].measureText(state['word']).width > state['canvas'].width){
		state['xv'] = -1 * Math.random();

	}
	if(state['x'] < 0){
		state['xv'] = 1 * Math.random();

	}
	if(state['y'] > state['canvas'].height){
		state['yv'] = -1 * Math.random();

	}
	if(state['y'] - 15 < 0){
		state['yv'] = 1 * Math.random();

	}
	state['x'] = state['x'] + state['xv'];
	state['y'] = state['y'] + state['yv'];
	state['canContext'].clearRect(0, 0, state['canvas'].width, state['canvas'].height);
	state['canContext'].fillText(state['word'] , state['x'], state['y']);
}
export {can_start};
