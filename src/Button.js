import React from 'react';

function Button({ title, imageSrc, disabled }) {
	// console.log("imageSrc:", imageSrc);
	// const image = imageSrc ? require(`./${imageSrc}`) : null;
	
	return (
		<button className={ "btn btn-primary btn-lg btn-block" + (disabled ? " disabled" : "") }>
			{/* render image and line break only if imageSrc is specified */}
			{imageSrc && <img src={require(`./${imageSrc}`)} alt={title}/>}
			{imageSrc && <br />}
			{title}
		</button>
	);
	
	
}

export default Button;
