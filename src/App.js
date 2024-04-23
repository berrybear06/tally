import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Addition from './Addition';

function App() {
	return (
		<Router basename="/tally">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/addition" element={<Addition />} />
			</Routes>
		</Router>
	);
}

export default App;
