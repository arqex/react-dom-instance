import * as React from 'react';

export default class ParentComponent extends React.Component {
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
			<div test-dataid="div" />
		);
	}
	isLeaf(){}
}


