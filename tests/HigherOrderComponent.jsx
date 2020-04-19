import * as React from 'react';

class WrappedComponent extends React.Component {
	render() {
		return (
			<div data-testid="div" />
		);
	}
	isWrapped(){}
}

function HocChild( C ){
  return class HocChild extends React.Component {
    render() {
      return <C {...this.props} />
    }
    isHocChild(){}
  }
}


function HocParent( C ){
  return class HocParent extends React.Component {
    render() {
      return <C {...this.props} />
    }
    isHocParent(){}
  }
}


export default HocParent( HocChild( WrappedComponent ) );