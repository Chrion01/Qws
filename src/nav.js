import React from 'react';
import './nav.css';

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handlePageChange = this.props.handlePageChange.bind(this);
	}
	handleClick(event){
		event.preventDefault();
		console.log(event.target.id);
		this.handlePageChange(event);
	}
	render(){
		return(<div>
			<ul className="nav">
				<li id="1" onClick={this.handleClick}>Home</li>
				<li id="2" onClick={this.handleClick}>A javascript thing</li>
				<li id="3" onClick={this.handleClick}>3</li>
			</ul>
			</div>

		);
	}
	
}
export default NavBar;
