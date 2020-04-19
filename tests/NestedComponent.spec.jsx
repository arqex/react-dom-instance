import * as React from 'react';
import { render } from '@testing-library/react';
import NestedComponent from './NestedComponent';
import { findInstance } from '../react-dom-instance';

describe('<NestedComponent />', () => {
	describe('when not using componentName', () => {
		it('should get the instance of the Leaf component for the react testing container', () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(container);
			expect( instance.isLeaf ).toBeTruthy();
		});

		it('should get the instance of the Leaf component for the div', () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = findInstance( queryByTestId('div') );
			expect( instance.isLeaf ).toBeTruthy();
		});
	});


	describe('when using react testing library container', () => {
		it("should get the instance for the NestedComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(container, {componentName:'NestedComponent'});
			expect( instance.isParent ).toBeTruthy();
		});
	
		it("should get the instance for the IntermediateComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(container, {componentName:'IntermediateComponent'});
			expect( instance.isIntermediate ).toBeTruthy();
		});
	
		it("should get the instance for the LeafComponent", () => {
			let { container } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(container, {componentName:'LeafComponent'});
			expect( instance.isLeaf ).toBeTruthy();
		});
	});

	
	describe('when using a queried DOM element', () => {
		it("should get the instance for the NestedComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(queryByTestId('div'), {componentName:'NestedComponent'});
			expect( instance.isParent ).toBeTruthy();
		});
	
		it("should get the instance for the IntermediateComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(queryByTestId('div'), {componentName:'IntermediateComponent'});
			expect( instance.isIntermediate ).toBeTruthy();
		});
	
		it("should get the instance for the LeafComponent", () => {
			let { queryByTestId } = render(
				<NestedComponent />
			);
	
			let instance = findInstance(queryByTestId('div'), {componentName:'LeafComponent'});
			expect( instance.isLeaf ).toBeTruthy();
		});
	});

	describe('when using maxIteration', () => {
		describe('and using testing library container', () => {
			it('should get the parent component when maxIteration >= 2', () => {
				let { container } = render(
					<NestedComponent />
				);
	
				let options = {
					componentName: 'NestedComponent',
					maxIteration: 2
				};
				let instance = findInstance(container, options);
				expect( instance.isParent ).toBeTruthy();
			});
	
			it('should NOT get the parent component when maxIteration < 2', () => {
				let { container } = render(
					<NestedComponent />
				);
	
				let options = {
					componentName: 'NestedComponent',
					maxIteration: 1
				};
				let instance = findInstance(container, options);
				expect( instance.isParent ).toBeFalsy();
			});
		});

		describe('and using queried DOM node', () => {
			it('should get the parent component when maxIteration >= 2', () => {
				let { queryByTestId } = render(
					<NestedComponent />
				);

				let options = {
					componentName: 'NestedComponent',
					maxIteration: 2
				};
				let instance = findInstance(queryByTestId('div'), options);
				expect( instance.isParent ).toBeTruthy();
			});

			it('should NOT get the parent component when maxIteration < 2', () => {
				let { queryByTestId } = render(
					<NestedComponent />
				);

				let options = {
					componentName: 'NestedComponent',
					maxIteration: 1
				};
				let instance = findInstance(queryByTestId('div'), options);
				expect( instance.isParent ).toBeFalsy();
			});
		})
	});
});