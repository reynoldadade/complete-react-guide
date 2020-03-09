import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}
	state = {
		persons: [
			{ id: 1, name: 'Rey', age: 27 },
			{ id: 2, name: 'Bansah', age: 29 },
		],
		showPersons: false,
		showCockpit: true,
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
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					changed={this.nameChangedHandler}
					clicked={this.deletePersonHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<button onClick={() => this.setState({ showCockpit: false })}>
					Remove cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						persons={this.state.persons}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</div>
		);
	}
}

export default App;
