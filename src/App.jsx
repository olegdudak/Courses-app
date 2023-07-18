import React from 'react';
import './App.scss';
import Header from './topComponent/components/Header/Header';
import SearchBar from './topComponent/components/Courses/components/SearchBar/SearchBar.jsx';
import CreateCourse from './topComponent/components/CreateCourse/CreateCourse';
import { useState } from 'react';
import CardInfoCourses from './topComponent/components/Courses/components/CourseCard/CardInfoCourses';
import CardInfoAutors from './topComponent/components/Courses/components/CourseCard/CardInfoAutors';

const App = () => {
	const [massiv, setMassiv] = useState(CardInfoCourses);
	const [addAutor, setAddAutor] = useState(CardInfoAutors);

	return (
		<div className='wrapper-app'>
			<div className='container'>
				<div className='header-container'>
					<Header />
				</div>

				<nav className='tabs-items'>
					<a href='#1' className='tabs-item'>
						Course
					</a>
					<a href='#2' className='tabs-item'>
						AddCourse
					</a>
				</nav>

				<div className='tabs-body'>
					<div id='1' className='tabs-block '>
						<div className='SearchBar'>
							<SearchBar massiv={massiv} addAutor={addAutor} />
						</div>
					</div>
					<div id='2' className='tabs-block'>
						<CreateCourse
							setMassiv={setMassiv}
							addAutor={addAutor}
							setAddAutor={setAddAutor}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
