import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav.js';
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
		let page = this.state.page;
		return(<div>
			<h3>
				TITLE
			</h3>

			<NavBar handlePageChange={this.handlePageChange}></NavBar>
			
			<p> words {page}</p>
			
		</div>

		);
	}
	
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
