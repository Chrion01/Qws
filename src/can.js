var max_alt = 0;
function increase_max_alt(){
	max_alt += 1;
	console.log('max alt ' + max_alt);
}

function can_start(canvas, canContext, msg = 'This is javascript'){
	
	console.log('can start');
	var can = {
		canvas : canvas,
		canContext : canContext,
		states : []
	}
	main_loop(can, msg);
}	

function can_item(can, word, x = 50, y = 50, xv = 1, yv = 1){
	var state = {word : word, x : x, y : y, xv : xv, yv : yv, dead : false};

	can.states[can.states.length] = state;
	
}

function main_loop(can, msg = 'This is javascript'){
	can_item(can, msg);
	
	setInterval(main_process, 10, can);
}

function main_process(can){
	for(let n = 0; n < can.states.length; n++){
		move_bounce(can.states[n], can);
	}
	draw(can);
}

function draw(can){
	can.canContext.clearRect(0, 0, can.canvas.width, can.canvas.height);
	
	for(let i = 0; i < can.states.length; i++){
		if(can.states[i]['dead'] === false){
			can.canContext.fillText(can.states[i]['word'] , can.states[i]['x'], can.states[i]['y']);
		}
	}
}

function new_can(can, x, y, xv, yv){
	if(max_alt >= can.states.length){
		can_item(can, 'More Javascript', x, y, xv, yv);
		console.log('more items')
	}
}

function move_bounce(state, can){
	if(state['dead'] === true){
		return;
	}
	if(state['x'] + can.canContext.measureText(state['word']).width > can.canvas.width){
		state['xv'] = -1 * Math.random();
		new_can(can, state['x'], state['y'], state['xv'], state['yv']);
	}
	if(state['x'] < 0){
		state['xv'] = 1 * Math.random();
		new_can(can, state['x'], state['y'], state['xv'], state['yv']);
	}
	if(state['y'] > can.canvas.height){
		state['yv'] = -1 * Math.random();
		new_can(can, state['x'], state['y'], state['xv'], state['yv']);
	}
	if(state['y'] - 15 < 0){
		state['yv'] = 1 * Math.random();
		new_can(can, state['x'], state['y'], state['xv'], state['yv']);
	}
	state['x'] = state['x'] + state['xv'];
	state['y'] = state['y'] + state['yv'];

}
export {can_start, increase_max_alt};
