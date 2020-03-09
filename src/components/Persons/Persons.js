import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}
	render() {
		console.log('[Persons.js] rendering');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={event => this.props.changed(person.id, event)}
				/>
			);
		});
	}
}

export default Persons;
