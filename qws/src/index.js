import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div classname="title">
				<h3>
					TITLE
				</h3>
			</div>
		

		);
	}
	
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
