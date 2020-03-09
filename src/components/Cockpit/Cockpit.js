import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
	let classesAssign = [];
	let buttonClass = [classes.Button];

	if (props.showPersons) {
		buttonClass.push(classes.Red);
	}

	if (props.persons.length <= 2) {
		classesAssign.push(classes.Red);
	}
	if (props.persons.length <= 1) {
		classesAssign.push(classes.Bold);
	}
	return (
		<div>
			<h1>{props.title}</h1>
			<p className={classesAssign.join(' ')}>This is really working!</p>
			<button className={buttonClass.join(' ')} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
