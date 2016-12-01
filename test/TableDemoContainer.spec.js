import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../src/reducers/reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import chai from 'chai';
// import sinon from 'sinon';
// import spies from 'chai-spies';

// chai.use(spies);

let should = chai.should()
  , expect = chai.expect;

const store = createStore(reducer);

console.log(store);

// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TableDemoContainer } from '../src/containers';
import TableDemo from '../src/components/TableDemo';
// import DialogDemo from '../src/components/DialogDemo';

describe('TableDemoContainer', () => {
	let Component;
	//let TableDemoComponent;
  beforeEach(() => {
		const wrapper = mount(
			<Provider store={store}>
				<TableDemoContainer />
			</Provider>
		);

		Component = wrapper.find(TableDemoContainer);
		//TableDemoComponent = Component.find(TableDemo);
	});

	it('should render', () => {
		expect(Component.length).toBeTruthy();
		//expect(TableDemoComponent.length).toBeTruthy();
	});
});