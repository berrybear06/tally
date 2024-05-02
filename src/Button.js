import React from 'react';
import { Link } from 'react-router-dom';

function Button({ title, imageSrc, linkTo }) {
	// console.log("imageSrc:", imageSrc);
	// const image = imageSrc ? require(`./${imageSrc}`) : null;
	
	if (linkTo) {
		return (
			<div className="col-md-3 col-sm-6 col-xs-6">
				<Link to={linkTo}>
					<button className="btn btn-primary btn-lg btn-block">
						{/* render image and line break only if imageSrc is specified */}
						{imageSrc && <img src={require(`./${imageSrc}`)} alt={title}/>}
						{imageSrc && <br />}
						{title}
					</button>
				</Link>
			</div>
		)
	} else {
		return (
			<div className="col-md-3 col-sm-6 col-xs-6">
				<button className="btn btn-primary btn-lg btn-block disabled">
					{/* render image and line break only if imageSrc is specified */}
					{imageSrc && <img src={require(`./${imageSrc}`)} alt={title}/>}
					{imageSrc && <br />}
					{title}
				</button>
			</div>
		);
	}
}

export default Button;
