import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		setTimeout(() => {
			alert('Saved data to cloud!');
		}, 1000);

		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] in 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

	const classesAssign = [];
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
