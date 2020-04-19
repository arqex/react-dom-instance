import * as React from 'react';
import { render } from '@testing-library/react';
import FunctionalComponent from './FunctionalComponent';
import { findInstance } from '../react-dom-instance';


describe('<Functional />', () => {
  it('should NOT find any instance in the testing library container', () => {
    let { container } = render(
      <FunctionalComponent />
    );

    let instance = findInstance(container);
    expect( instance ).toBe( false );
  });
  
  it('should NOT find any instance in the parent DOM node', () => {
    let { queryByTestId } = render(
      <FunctionalComponent />
    );

    let instance = findInstance( queryByTestId('wrapper') );
    expect( instance ).toBe( false );
  });
  
  it('should NOT find any instance in the child DOM node', () => {
    let { queryByTestId } = render(
      <FunctionalComponent />
    );

    let instance = findInstance( queryByTestId('content') );
    expect( instance ).toBe( false );
  });

  it('shoud Not find any instance in a DOM node not handled by react', () => {
    let div = document.createElement('div');
    console.log( div );
    let instance = findInstance( div );
    expect( instance ).toBe( false );
  })
});