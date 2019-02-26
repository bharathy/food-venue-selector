import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/app';

export default () => {
	return (
	<BrowserRouter>
		<div>
			<header className="bdr-btm center h-full p10 turq w-full"><h1 className="ft-22">Food Venue Selector</h1></header>
			<Switch>
				<Route exact path='/' component={App}/>
			</Switch>
		</div>
	</BrowserRouter>
	)
};
