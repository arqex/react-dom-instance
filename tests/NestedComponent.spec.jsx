import * as React from 'react';
import { render } from '@testing-library/react';
import NestedComponent from './NestedComponent';
import { getInstance } from '../react-dom-instance';

describe('<NestedComponent />', () => {
	describe('when using react testing library container', () => {
		it("should get the instance for the NestedComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(container, {componentName:'NestedComponent'});
			expect( instance.isParent ).toBeTruthy();
		});
	
		it("should get the instance for the IntermediateComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(container, {componentName:'IntermediateComponent'});
			expect( instance.isIntermediate ).toBeTruthy();
		});
	
		it("should get the instance for the LeafComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(container, {componentName:'LeafComponent'});
			expect( instance.isLeaf ).toBeTruthy();
		});
	});

	
	describe('when using a queried div', () => {
		it("should get the instance for the NestedComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'NestedComponent'});
			expect( instance.isParent ).toBeTruthy();
		});
	
		it("should get the instance for the IntermediateComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'IntermediateComponent'});
			expect( instance.isIntermediate ).toBeTruthy();
		});
	
		it("should get the instance for the LeafComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'LeafComponent'});
			expect( instance.isLeaf ).toBeTruthy();
		});
	});


});