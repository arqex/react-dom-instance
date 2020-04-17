import * as React from 'react';
import { render } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';
import { getInstance } from '../react-instance';

describe('getInstance()', () => {
	it("should get the instance from testing library's container", () => {
		let { container } = render(
			<SimpleComponent />
		);

		expect( getInstance( container ).aMethod ).toBeTruthy();
	});

	it("should get the instance from container's child", () => {
		let { container } = render(
			<SimpleComponent />
		);

		expect(getInstance(container.children[0]).aMethod).toBeTruthy();
	});
});