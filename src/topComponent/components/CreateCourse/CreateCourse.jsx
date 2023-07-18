import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateCourse.scss';
import { Link } from 'react-router-dom';

const CreateCourse = (props) => {
	const [addedAutor, setAddedAutor] = useState('None');
	const [titleSt, setTitleSt] = useState('');
	const [descriptionSt, setDescriptionSt] = useState('');
	const [durationSt, setDurationSt] = useState('');
	const [autorSt, setAutorSt] = useState('');
	const [AddAutorsName, setAddAutorsName] = useState('');
	const [formValid, setFormValid] = useState(false);
	const [clearFields, setClearFields] = useState(false);

	useEffect(() => {
		if (titleSt && descriptionSt && durationSt && autorSt) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [titleSt, descriptionSt, durationSt, autorSt]);

	function titleinput(event) {
		setTitleSt(event.target.value);
	}

	function descriptioninput(event) {
		setDescriptionSt(event.target.value);
	}

	function durationinput(event) {
		setDurationSt(event.target.value);
	}

	function addAutorinput(event) {
		setAddAutorsName(event.target.value);
	}

	const autorvalue = (id) => {
		setAutorSt(id);
	};

	const date = new Date();
	const currentDate = `${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()}`;

	function handleAddItem() {
		if (!titleSt || !descriptionSt || !durationSt || !autorSt) {
			alert('Error. You will be returned to the main page with no added data');
			return;
		}

		const newItem = {
			id: uuidv4(),
			title: titleSt,
			description: descriptionSt,
			creationDate: currentDate,
			duration: durationSt,
			authors: autorSt,
		};

		props.setMassiv((prevState) => [...prevState, newItem]);

		setClearFields(true);
	}

	const autorAddItem = () => {
		const newItem = {
			id: uuidv4(),
			name: AddAutorsName,
		};

		props.setAddAutor((prevState) => [...prevState, newItem]);
	};

	function autorAddValue(id) {
		const nameOfAutor2 = props.addAutor.find((el) => el.id === String(id));
		setAddedAutor(nameOfAutor2.name);
	}

	const handleClick = () => {
		window.location.href = '#1';
	};

	useEffect(() => {
		if (clearFields) {
			setTitleSt('');
			setDescriptionSt('');
			setDurationSt('');
			setAutorSt('');
			setClearFields(false);
		}
	}, [clearFields]);

	return (
		<div className='wrapper-createForm'>
			<div className='container-createForm'>
				<div className='top-input-container'>
					<div className='top-add-content-first'>
						<div className='input-add-top-left'>
							<div className='add-title size'>Title</div>
							<div className='input-add-title cd26'>
								<input
									type='text'
									className='bradius'
									value={titleSt}
									onChange={titleinput}
								/>
							</div>
						</div>
						<div className='btn-add-top-right'>
							<Link className='btnHome' to='/'>
								Home
							</Link>
						</div>
					</div>
					<div className='top-add-content-second'>
						<div className='add-description add-title size'>Description</div>
						<div className='input-add-title-description cd26'>
							<textarea
								type='text'
								className='bradius'
								maxLength='500'
								value={descriptionSt}
								onChange={descriptioninput}
							/>
						</div>
					</div>
				</div>

				<div className='zone'>
					<div className='left-zone'>
						<div className='add-duration'>
							<div className='addNewAutor'>
								<div className='big-text-add-autor add-title'>Add author</div>
								<div className='input-add-autor cd26'>
									<input
										type='text'
										className='bradius'
										value={AddAutorsName}
										onChange={addAutorinput}
									/>
								</div>
								<div className='button-puch-course'>
									<a
										href='#2'
										className='btn-addCourse btnHome'
										onClick={autorAddItem}
									>
										Add author
									</a>
								</div>
							</div>
							<div className='add-duration-container'>
								<div className='big-text-add-autor add-title'>Duration</div>

								<div className='input-add-autor cd26'>
									<input
										className='bradius'
										type='text'
										value={durationSt}
										onChange={durationinput}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='right-zone'>
						<div className='autors-list'>
							<div className='big-text-add-autor add-title'>Authors</div>

							<div className='autors-list'>
								{props.addAutor.map((val) => (
									<div className='list-container' key={val.id}>
										<div className='list'>
											<div className='list-plase add-title'>{val.name}</div>
										</div>
										<div className='list-button'>
											<button
												className='btnHome'
												onClick={() => {
													autorvalue(val.id);
													autorAddValue(val.id);
												}}
											>
												Add author
											</button>
										</div>
									</div>
								))}
								<div className='autorInLine_content'>
									<div className='autorInLine_text big-text-add-autor add-title'>
										Added author
									</div>
									<div className='autorInLive'>{addedAutor}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='button-puch-course'>
					<Link
						to='/'
						className='btnHome'
						onClick={() => {
							handleAddItem();
							handleClick();
						}}
						disabled={formValid}
					>
						Add
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
