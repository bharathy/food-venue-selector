import React from 'react';

import PlaceToGo from '../../src/components/PlaceToGo';

const testProps = {
	venues: ['test-venue']
}

describe('Given a PlaceToGo component', () => {
	describe('When component is rendered', () => {
		let wrapper;

		beforeEach(() => wrapper = shallow(<PlaceToGo { ...testProps} />));

		it('should render the App', () => {
			expect(wrapper).to.have.length(1);
		});
	});
});