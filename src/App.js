import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'Rey', age: 27 },
			{ id: 2, name: 'Bansah', age: 29 },
		],
		showPersons: false,
	};

	switchNameHandler = () => {
		//	console.log('Was clicked');
		this.setState({
			persons: [
				{ id: 1, name: 'Reynold', age: 26 },
				{ id: 2, name: 'Selassie', age: 29 },
			],
		});
	};

	nameChangedHandler = (id, event) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		console.log('personid', id);

		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({
			persons: persons,
		});
	};

	togglePersonsHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons,
		});
	};

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};
	render() {
		let buttonClass = [classes.Button];
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={this.deletePersonHandler.bind(
									this,
									index
								)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={this.nameChangedHandler.bind(
									this,
									person.id
								)}
							/>
						);
					})}
				</div>
			);
		}

		buttonClass.push(classes.Red);
		let classesAssign = [];
		if (this.state.persons.length <= 2) {
			classesAssign.push('red');
		}
		if (this.state.persons.length <= 1) {
			classesAssign.push('bold');
		}
		return (
			<div className={classes.App}>
				<h1>Hi I am react app</h1>
				<p className={classesAssign.join(' ')}>
					This is really working!
				</p>
				<button
					className={buttonClass.join(' ')}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
