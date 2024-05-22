import React, { useEffect } from 'react';
import Game from './Game';
import { Link } from 'react-router-dom';
import CVCWordsGame from './games/CVCWordsGame';

const CVCWords = () => {
	useEffect(() => {
		document.title = "C-V-C Words";
	}, []);
	
	const flavorText = "Matching words to pictures, or vice versa.";
	return (
		<div>
			<Link to="/"><p className="text-center mt-3 home-link">Back to Home</p></Link>
			<h1 className="text-center mt-3">C-V-C Words</h1>
			<Game questionGenerator={CVCWordsGame} flavorText={flavorText} showToggle={true}/>
		</div>
	);
};

export default CVCWords;
