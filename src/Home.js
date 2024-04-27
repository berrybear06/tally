// import logo from './logo.svg';
import './App.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Button from './Button';
import { Link } from 'react-router-dom';

const Home = () => {
	const headerName = "Tally";
	const headerDescription = "A simple and easy way to learn math!";
	return (
		<div className="App">
			{/*
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
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
			*/}
	
			<Header headerName={headerName} headerDescription={headerDescription} />
			
			<div className="container-fluid">
				<div className="button-row">
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Link to="/addition">
							<Button title="Addition" imageSrc="assets/icons/plus.png" /> {/* images go in tally/src; no ./ preceding paths */}
						</Link>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Subtraction" imageSrc="assets/icons/minus.png" />
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Money Math" imageSrc="assets/icons/money.png" />
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="C-V-C Words" imageSrc="assets/icons/book.png" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
