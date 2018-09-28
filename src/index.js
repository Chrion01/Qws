import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav.js';
import Home from './home.js';
import './index.css';

class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {page : 1};
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	handlePageChange(event){
		this.setState({page : event.target.id}); 
		console.log("page", event.target.id);
	}
	render(){
		let page = <Home />;
		if (this.state.page === 2){
			page = null;
		}
		else if (this.state.page === 3){
			page = null;
		}
		return(<div>
			<h3>
				TITLE
			</h3>

			<NavBar handlePageChange={this.handlePageChange}></NavBar>
			
			{page}
		</div>

		);
	}
	
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
