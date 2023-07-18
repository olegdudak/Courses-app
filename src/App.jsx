import React from 'react';
import './App.scss';
import Header from './topComponent/components/Header/Header';
import SearchBar from './topComponent/components/Courses/components/SearchBar/SearchBar.jsx';
import CreateCourse from './topComponent/components/CreateCourse/CreateCourse';
import Info from './topComponent/components/info/info';
import { useState } from 'react';
import CardInfoCourses from './topComponent/components/Courses/components/CourseCard/CardInfoCourses';
import CardInfoAutors from './topComponent/components/Courses/components/CourseCard/CardInfoAutors';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	const [massiv, setMassiv] = useState(CardInfoCourses);
	const [addAutor, setAddAutor] = useState(CardInfoAutors);

	return (
		<div className='wrapper-app'>
			<div className='container'>
				<div className='header-container'>
					<Header />
				</div>
				<div className='tabs-body'>
					<Routes>
						<Route
							path='/'
							element={<SearchBar massiv={massiv} addAutor={addAutor} />}
						/>
						<Route
							path='/create'
							element={
								<CreateCourse
									setMassiv={setMassiv}
									addAutor={addAutor}
									setAddAutor={setAddAutor}
								/>
							}
						/>
						<Route path='/info' element={<Info />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
