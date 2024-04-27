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
			<Header headerName={headerName} headerDescription={headerDescription} />
			
			<div className="container-fluid">
				<div className="button-row">
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Link to="/addition">
							<Button title="Addition" imageSrc="assets/icons/plus.png" /> {/* images go in tally/src; no ./ preceding paths */}
						</Link>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Subtraction" imageSrc="assets/icons/minus.png" disabled="true"/>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="Money Math" imageSrc="assets/icons/money.png" disabled="true"/>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6">
						<Button title="C-V-C Words" imageSrc="assets/icons/book.png" disabled="true"/>
					</div>
				</div>
			</div>
			<footer>
				<p>Made with React.js by berrybear06 | Find me on <a href="https://github.com/berrybear06">GitHub</a></p>
			</footer>
		</div>
	);
};

export default Home;
