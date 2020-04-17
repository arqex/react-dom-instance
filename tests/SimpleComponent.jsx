import * as React from 'react';

export default class SimpleComponent extends React.Component {
	render() {
		return (
			<div>A simple component</div>
		);
	}
	aMethod() {
		// Some method to be accesible from the instance
	}
}
