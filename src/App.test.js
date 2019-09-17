import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory Function to create a shallowWrapper fpr the App Component
 * @function setup
 * @param {object} props - Component props specific for this component 
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => shallow(<App {...props}/>);

/**
 * Function to return shallowWrapper containing node(s) with the given data-test value
 * @function findByTextAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of dta-test attribute fro search
 * @returns {ShallowWrapper}
 * 
*/

const findByTextAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTextAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTextAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTextAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at cero', () => {

});

test('clicking button increments counter display', () => {

});