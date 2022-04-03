import React, { useState } from 'react';
import './Hog.css';
function Hog({ name, specialty, greased, weight, image, id }) {
	const [showOtherData, setShowOtherData] = useState(false);
	const [hideHog, setHideHog] = useState(false);
	const [showHog, setShowHog] = useState(true);

	function clickHandler(event) {
		console.log(event.target.id);

		if (showOtherData) {
			setShowOtherData(false);
		} else {
			setShowOtherData(true);
		}
	}

	function showHanler() {
		setShowHog(true);
		setHideHog(false);
	}

	function hideHandler() {
		setHideHog(true);
		setShowHog(false);
	}

	return (
		<div className='hog ui eight wide column' onClick={clickHandler} id={id}>
			{!hideHog && (
				<div className='hog-content'>
					<img src={image} />
					<h3>{name}</h3>

					{showOtherData && (
						<div className='hidden-data'>
							<h4>
								<strong>Specility: </strong>
								{specialty}
							</h4>
							<h5>
								<strong>Greased: </strong>
								{greased}
							</h5>
							<h6>
								<strong>Weight: </strong>
								{weight}
							</h6>
						</div>
					)}
				</div>
			)}

			{!hideHog && (
				<div className='hide-btn' onClick={hideHandler}>
					Hide
				</div>
			)}

			{hideHog && (
				<div className='show-btn' onClick={showHanler}>
					Show
				</div>
			)}
		</div>
	);
}

export default Hog;
