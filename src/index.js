import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './components/root';
import venueReducer from './reducers/venue';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const init = () => {
	const initialState = {
		checkedUsers: [],
		placeToGo: [],
		placeToAvoid: []
	};
	const store = createStoreWithMiddleware(venueReducer, initialState);

	ReactDOM.render(
		<Root store={ store } />,
		document.getElementById('app')
	);
}

module.hot.accept();
