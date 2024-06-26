import './App.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Button from './Button';

const Home = () => {
	useEffect(() => {
		document.title = "Tally";
	}, []);
	
	const headerName = "Tally";
	const headerDescription = "A simple and easy way to learn math!";
	return (
		<div className="App">
			<Header headerName={headerName} headerDescription={headerDescription} />
			
			<div className="container-fluid">
				<div className="button-row">
					<Button title="Addition" imageSrc="assets/icons/plus.png" linkTo="/addition" /> {/* images go in tally/src; no ./ preceding paths */}
					<Button title="Subtraction" imageSrc="assets/icons/minus.png" linkTo="/subtraction" />
					<Button title="Money Math" imageSrc="assets/icons/money.png" />
					<Button title="C-V-C Words" imageSrc="assets/icons/book.png" linkTo="/cvcwords" />
				</div>
			</div>
			{/* <a href="https://www.flaticon.com/free-icons/" title="Icons">Icons created by Flaticon</a> */}
			<footer>
				<p>Made with React.js by berrybear06 | Find me on <a href="https://github.com/berrybear06">GitHub</a></p>
			</footer>
		</div>
	);
};

export default Home;
