import React from 'react';
import { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard.jsx';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className='wrapper-SearchBar'>
			<div className='container-SearchBar'>
				<div className='include-item'>
					<input
						className='searchInput'
						type='text'
						placeholder='Search...'
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
				</div>
				<div className='add-dutton-wrapper'>
					<div className='add-dutton-wrapper-container'>
						<Link className='linkadd' to='/create'>
							Create course
						</Link>
					</div>
				</div>
			</div>
			<div className='container-CourseCard'>
				<CourseCard
					value={searchTerm}
					massiv={props.massiv}
					addAutor={props.addAutor}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
