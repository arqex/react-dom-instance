import * as React from 'react';

export default class NestedComponent extends React.Component {
	render() {
		return (
			<IntermediateComponent />
		);
	}
	isParent(){}
}

class IntermediateComponent extends React.Component {
	render() {
		return (
			<LeafComponent />
		);
	}
	isIntermediate(){}
}

class LeafComponent extends React.Component {
	render() {
		return (
			<div data-testid="div" />
		);
	}
	isLeaf(){}
}


