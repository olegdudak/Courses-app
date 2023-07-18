import React from 'react';
import './Header.scss';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<div className='wrapper-header'>
			<div className='navbar-left'>
				<div className='logo'>
					<Logo />
				</div>
			</div>

			<div className='navbar-right'>
				<div className='name'>Oleh</div>
				<div className='btn-wrapper'>
					<a href='#1' className='btn-start'>
						Увійти
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
