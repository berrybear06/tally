import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Button from './Button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
	
		<Header />
			<div className="container-fluid">
				<div className="button-row">
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Activity 1" imageSrc="./assets/icons/plus.png"/> {/* images go in tally/public */}
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Activity 2" imageSrc="./assets/icons/plus.png" />
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Activity 3" imageSrc="./assets/icons/plus.png" />
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Activity 4" imageSrc="./assets/icons/plus.png" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
