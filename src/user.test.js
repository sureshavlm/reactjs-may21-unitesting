import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from './user';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders user data', async() => {
    const fakeUser = {
        name: "John Sith",
        age: 32,
        address: "123, Avenue 1, TX"
    };

    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    ); 

    await act(async() => {
        render(<User id = "123"/>, container);
    });

    /**
     * expect(1).toBe(1); 
     * expecting 1 should equal 1
    */
    expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
    expect(parseInt(container.querySelector("strong").textContent)).toBe(fakeUser.age);

    global.fetch.mockRestore();
});