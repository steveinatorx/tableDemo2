import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../src/reducers/reducers';
import { createStore } from 'redux';

import chai from 'chai';

let should = chai.should()
  , expect = chai.expect;

const store = createStore(reducer);

import { TableDemoContainer } from '../src/containers';
import TableDemo from '../src/components/TableDemo';

describe('TableDemoContainer', () => {
	let Component;
	let TableDemoComponent;
  beforeEach(() => {
		const wrapper = mount(
			<Provider store={store}>
				<TableDemoContainer />
			</Provider>
		);

		Component = wrapper.find(TableDemoContainer);
		TableDemoComponent = Component.find(TableDemo);
	});

	it('should render', () => {
    expect(Component.length).to.be.ok;
		expect(TableDemoComponent.length).to.be.ok;
	});
});