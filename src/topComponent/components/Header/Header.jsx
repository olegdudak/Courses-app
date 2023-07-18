import React from 'react';
import './Header.scss';
import Logo from './components/Logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='wrapper-header'>
			<div className='navbar-left'>
				<div className='logo'>
					<Logo />
				</div>
			</div>

			<div className='navbar-right'>
				<Link className='btnInfo' to='/'>
					Home
				</Link>
				<Link className='btnInfo' to='/info'>
					Info
				</Link>
			</div>
		</div>
	);
};

export default Header;
