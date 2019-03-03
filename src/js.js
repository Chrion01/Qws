import React from 'react';

class Js extends React.Component{
	constructor(props) {
		super(props);
		this.state = {jstate : 0, xv : 0, yv : 0, x : 50, y : 50, text : "Text"};
		this.handleButton = this.handleButton.bind(this);

	}
	componentDidMount(){

		let c = this.refs.can;
		c.setAttribute("width", 1000);
		c.setAttribute("height", 200);

		this.v = c.getContext("2d");
		this.v.font = "15px Arial";
		this.v.fillText(this.state.text ,this.state.x, this.state.y);
		this.interval = setInterval(() => this.move(), 10);
		
		
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	componentDidUpdate(){
		
		this.v.clearRect(0, 0, 1000, 200);
		this.v.fillText(this.state.text ,this.state.x, this.state.y);
	}
	/*
	thing(words){

		let x = 50;
		let y = 50;
		let xv = 1;
		let yv = 1;
		console.log(words);
		if(x + this.v.measureText(words).width > 1000){
			xv : -1 * Math.random();

		}
		if(x < 0){
			xv = 1 * Math.random();

		}
		if(y > 200){
			yv = -1 * Math.random();

		}
		if(y - 15 < 0){
			yv = 1 * Math.random();

		}
		x = x + xv;
		y = y + yv;
		this.v.fillText(words , x, y)
		
	}
	*/
	handleButton(e){
		if(this.state.jstate === 0){
			this.setState({xv : Math.random(), yv : Math.random(), text : "Javascript"});
			console.log(0);
		}
		else if(this.state.jstate === 1){
			this.setState({text : "More Javascript"});
			console.log(1);
		}
		else if(this.state.jstate === 2){
			this.setState({text : "Just do a Javascript, it's easy"});
			console.log(2);
		}
		else if(this.state.jstate === 3){
			this.setState({text : "But this isn't Javascript"});
			console.log(3);
		}
		else if(this.state.jstate === 4){
			this.setState({text : "This is React"});
			this.v.fillStyle = 'black';
			clearInterval(this.interval);
			console.log(4);
		}
		else{
			console.log(this.state.jstate);
		}
		this.setState({jstate: this.state.jstate + 1});
	}
	move(){

		let hit = false;
		if(this.state.x + this.v.measureText(this.state.text).width > 1000){
			this.setState({xv : -1 * Math.random()});
			hit = true;
		}
		if(this.state.x < 0){
			this.setState({xv : 1 * Math.random()});
			hit = true;
		}
		if(this.state.y > 200){
			this.setState({yv : -1 * Math.random()});
			hit = true;
		}
		if(this.state.y - 15 < 0){
			this.setState({yv : 1 * Math.random()});
			hit = true;
		}
		if(this.state.jstate > 1 && hit){
			this.v.fillStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		}
		this.setState({x : this.state.x + this.state.xv});
		this.setState({y : this.state.y + this.state.yv});

		
	}
	
	render(){
		return(
			<p id="jds">
				{this.state.jstate <=5 &&
				<canvas ref="can" >
				</canvas>
				}
				{this.state.jstate <= 6 &&
					<button onClick={this.handleButton}>More javascript</button>
				}
			</p>
			
		);
	

	}

}

export default Js;
