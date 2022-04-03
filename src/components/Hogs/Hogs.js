import React from 'react';

import Hog from './Hog';

function Hogs({ allHogs }) {
	return (
		<div className='ui grid container'>
			{allHogs.map((hog) => {
				return (
					<Hog
						key={hog.id}
						name={hog.name}
						specialty={hog.specialty}
						image={hog.image}
						id={hog.id}
						weight={hog.weight}
						speciality={hog.speciality}
						greased={hog.greased}
					/>
				);
			})}
		</div>
	);
}

export default Hogs;
