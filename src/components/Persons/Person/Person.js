import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass';
import classes from './Person.css';
import './Person.css';

class Person extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props) {
	// 	console.log('[Person.js] componentsWillRecieveProps', props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapShotBeforeUpdate');
		return { message: 'snapshot!!!' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log('Component did update -- snapshot', snapshot);
	}
	render() {
		console.log('[Persons.js] render');
		return (
			<WithClass classes={classes.Person}>
				<p onClick={this.props.click}>
					I am a {this.props.name} and I am {this.props.age} years
					old!
				</p>
				<input type="text" onChange={this.props.changed} />
			</WithClass>
		);
	}
}

export default Person;
