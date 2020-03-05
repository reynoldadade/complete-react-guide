import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Rey', age: 27 },
			{ name: 'Bansah', age: 29 },
		],
	};

	switchNameHandler = () => {
		//	console.log('Was clicked');
		this.setState({
			persons: [
				{ name: 'Reynold', age: 26 },
				{ name: 'Selassie', age: 29 },
			],
		});
	};
	render() {
		return (
			<div className="App">
				<h1>Hi I am react app</h1>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				>
					This is to check for children
				</Person>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				/>
				<button onClick={this.switchNameHandler}>Switch Name</button>
			</div>
		);
	}
}

export default App;
