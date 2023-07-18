import React from 'react';
import './CourseCard.scss';

function CourseCard(props) {
	const filtredCourses = props.massiv.filter((name) => {
		return name.title.toLowerCase().includes(props.value.toLowerCase());
	});

	function bollian(val) {
		const nameOfAutor = props.addAutor.find((el) => el.id === String(val));
		return nameOfAutor.name;
	}

	return (
		<div className='wrapper-course-card-1'>
			{filtredCourses.map((inf) => (
				<div className='wrapper-course-card-2'>
					<div className='container-card'>
						<div className='wrapper-left'>
							<div className='name-course'>{inf.title}</div>
							<div className='text-course'>{inf.description}</div>
						</div>
						<div className='wrapper-right'>
							<div className='right-course-info-up'>
								<div className='autors-course'>
									<b>Author:</b> {bollian(inf.authors)}
								</div>
								<div className='duration-course'>
									<b>Duration:</b> {inf.duration} hours
								</div>
								<div className='created-course'>
									<b>Created:</b> {inf.creationDate}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CourseCard;
