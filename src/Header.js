import React from 'react';

function Header({ headerName, headerDescription }) {
	return (
		<div className="text-center mt-5 mb-4">
			<h1>{headerName}</h1>
			<p>{headerDescription}</p>
		</div>
	);
}

export default Header;
