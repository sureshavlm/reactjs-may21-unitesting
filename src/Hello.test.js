/* Unit test for Hello Component */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

import Hello from './Hello'; //import component to be test

let container = null;

//runs every time before completing test case
beforeEach( () => {
    //setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);   
});

//runs every time after completing test case
afterEach(() => {
    //clean up existing
    unmountComponentAtNode(container); 
    container.remove(); //remove container from dom
    container = null // garbage collection
});

//test cases wrapped inside it method
it('render component without name', () => {
    //any interaction with UI like rendering, external APIs, events
    render(<Hello />, container);
    expect(container.textContent).toBe('Hello, Strager!');
});

it('render Hello component with name ', () => {
    render(<Hello name = "David"/>, container);
    expect(container.textContent).toBe('Hello, David');
});
 
it('render Hello component with name ', () => {
    render(<Hello name = ""/>, container);
    expect(container.textContent).toBe('Hello, Strager!');
});
