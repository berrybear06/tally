import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Addition from './Addition';
import Subtraction from './Subtraction';

function App() {
	return (
		<Router basename="/tally">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/addition" element={<Addition />} />
				<Route path="/subtraction" element={<Subtraction />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
