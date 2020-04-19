import * as React from 'react';
import { render } from '@testing-library/react';
import Hoc from './HigherOrderComponent';
import { getInstance } from '../react-dom-instance';

describe('<Hoc />', () => {
	describe('when not using componentName', () => {
		it('should get the instance of the Wrapped component for the react testing container', () => {
			let { container } = render(
				<Hoc />
			);
	
			let instance = getInstance(container);
			expect( instance.isWrapped ).toBeTruthy();
		});

		it('should get the instance of the Wrapped component for the div', () => {
			let { queryByTestId } = render(
				<Hoc />
			);
	
			let instance = getInstance( queryByTestId('div') );
			expect( instance.isWrapped ).toBeTruthy();
		});
	});


	describe('when using react testing library container', () => {
		it("should get the instance for the Hoc", () => {
			let { container } = render(
				<Hoc />
			);
	
			let instance = getInstance(container, {componentName:'HocParent'});
			expect( instance.isHocParent ).toBeTruthy();
		});
	
		it("should get the instance for the HocChild", () => {
			let { container } = render(
				<Hoc />
			);
	
			let instance = getInstance(container, {componentName:'HocChild'});
			expect( instance.isHocChild ).toBeTruthy();
		});
	
		it("should get the instance for the WrappedComponent", () => {
			let { container } = render(
				<Hoc />
			);
	
			let instance = getInstance(container, {componentName:'WrappedComponent'});
			expect( instance.isWrapped ).toBeTruthy();
		});
	});

	
	describe('when using a queried DOM element', () => {
		it("should get the instance for the Hoc", () => {
			let { queryByTestId } = render(
				<Hoc />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'HocParent'});
			expect( instance.isHocParent ).toBeTruthy();
		});
	
		it("should get the instance for the HocChild", () => {
			let { queryByTestId } = render(
				<Hoc />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'HocChild'});
			expect( instance.isHocChild ).toBeTruthy();
		});
	
		it("should get the instance for the WrappedComponent", () => {
			let { queryByTestId } = render(
				<Hoc />
			);
	
			let instance = getInstance(queryByTestId('div'), {componentName:'WrappedComponent'});
			expect( instance.isWrapped ).toBeTruthy();
		});
	});

	describe('when using maxIteration', () => {
		describe('and using testing library container', () => {
			it('should get the parent component when maxIteration >= 2', () => {
				let { container } = render(
					<Hoc />
				);
	
				let options = {
					componentName: 'HocParent',
					maxIteration: 2
				};
				let instance = getInstance(container, options);
				expect( instance.isHocParent ).toBeTruthy();
			});
	
			it('should NOT get the parent component when maxIteration < 2', () => {
				let { container } = render(
					<Hoc />
				);
	
				let options = {
					componentName: 'HocParent',
					maxIteration: 1
				};
				let instance = getInstance(container, options);
				expect( instance.isHocParent ).toBeFalsy();
			});
		});

		describe('and using queried DOM node', () => {
			it('should get the parent component when maxIteration >= 2', () => {
				let { queryByTestId } = render(
					<Hoc />
				);

				let options = {
					componentName: 'HocParent',
					maxIteration: 2
				};
				let instance = getInstance(queryByTestId('div'), options);
				expect( instance.isHocParent ).toBeTruthy();
			});

			it('should NOT get the parent component when maxIteration < 2', () => {
				let { queryByTestId } = render(
					<Hoc />
				);

				let options = {
					componentName: 'HocParent',
					maxIteration: 1
				};
				let instance = getInstance(queryByTestId('div'), options);
				expect( instance.isHocParent ).toBeFalsy();
			});
		})
	});
});