import React from 'react';
import Header from './Header';

const Addition = () => {
	const headerName = "Addition";
	const headerDescription = "This is the page for the addition activity!";
	return (
		<Header headerName={headerName} headerDescription={headerDescription} />
	);
};

export default Addition;
