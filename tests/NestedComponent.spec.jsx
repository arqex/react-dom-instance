import * as React from 'react';
import { render } from '@testing-library/react';
import NestedComponent from './NestedComponent';
import { getInstance } from '../react-dom-instance';

describe('<NestedComponent />', () => {
	it("should get the instance from testing library's container", () => {
		let { container } = render(
			<NestedComponent />
		);

		expect(getInstance(container).isParent).toBeTruthy();
	});

	it("should get the instance from container's child", () => {
		let { container } = render(
			<NestedComponent />
		);

		expect(getInstance(container.children[0]).isParent).toBeTruthy();
	});

	it("should get the instance by componentName", () => {
		let { container } = render(
			<NestedComponent />
		);

		let instance = getInstance(container, { componentName: 'NestedComponent' });
		expect(instance.isParent).toBeTruthy();
	})
});