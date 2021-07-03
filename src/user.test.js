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

//test case
it('renders user data', async () => {

    const fakeUser = {
        name: "John Sith",
        age: 32,
        address: "123, Avenue 1, TX"
    };

    //SpyOn http://localhost:3000/123
    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        });
    });

    await act(async() => {
        render(<User id = "123"/>, container);
    });
    

    expect(container.querySelector('summary').textContent.toBe(fakeUser.name));
    expect(container.querySelector("strong").textContent.toBe(fakeUser.age));

    global.fetch.mockRestore();// restroing mock object back to another test to avid memory leaks

});