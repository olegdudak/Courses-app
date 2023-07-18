import React from 'react';
import image from './img/logo.jpg';
import './Logo.scss';

const Logo = () => {
	return (
		<div className='logo'>
			<img src={image} alt='img' />
		</div>
	);
};

export default Logo;
