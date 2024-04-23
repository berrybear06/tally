import React from 'react';

function Button({ title, imageSrc }) {
	return (
		<button className="btn btn-primary btn-lg btn-block">
			{/* render image and line break only if imageSrc is specified */}
			{imageSrc && <img src={imageSrc} alt={title}/>}
			{imageSrc && <br />}
			{title}
		</button>
	);
}

export default Button;
