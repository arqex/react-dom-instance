import * as React from 'react';
import { render } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';
import { findInstance } from '../react-dom-instance';

describe('<SimpleComponent />', () => {
	it("should get the instance from testing library's container", () => {
		let { container } = render(
			<SimpleComponent />
		);

		expect( findInstance( container ).aMethod ).toBeTruthy();
	});

	it("should get the instance from container's child", () => {
		let { container } = render(
			<SimpleComponent />
		);

		expect(findInstance(container.children[0]).aMethod).toBeTruthy();
	});

	it("should get the instance by componentName", () => {
		let { container } = render(
			<SimpleComponent />
		);

		let instance = findInstance( container, {componentName: 'SimpleComponent'} );
		expect( instance.aMethod ).toBeTruthy();
	});

	it("should NOT get any instance for an unknown componentName", () => {
		let { container } = render(
			<SimpleComponent />
		);

		let instance = findInstance( container, {componentName: 'OtherComponent'} );
		expect( instance ).toBe( false );
	})
});