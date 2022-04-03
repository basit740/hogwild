import React, { useState } from 'react';
import Nav from './Nav';

import Hogs from './Hogs/Hogs.js';

import hogs from '../porkers_data';

function App() {
	const [allHogs, setAllHogs] = useState(hogs);
	const [selectedFilter, setSelectedFilter] = useState('All');
	const [sorted, setSorted] = useState(null);

	function changeHandler(event) {
		if (event.target.value == 'greased') {
			const filterd = allHogs.filter((hog) => {
				return hog.greased == true;
			});

			setAllHogs(filterd);
			setSelectedFilter('Greased');
		} else {
			setAllHogs(hogs);
			setSelectedFilter('All');
		}
	}

	function sortHandler(event) {
		setSorted(event.target.value);

		if (event.target.value == 'name') {
			let sorted = allHogs.sort((firstHog, seconHog) =>
				firstHog.name > seconHog.name ? 1 : -1
			);
			setAllHogs(sorted);
		} else if (event.target.value == 'weight') {
			let sorted = allHogs.sort((firstHog, seconHog) =>
				firstHog.weight < seconHog.weight ? 1 : -1
			);
			setAllHogs(sorted);
		}
	}
	return (
		<div className='App'>
			<Nav />
			<div className='filter'>
				<h4>{selectedFilter}</h4>
				<div className='sort-by'>
					<input type='radio' value='name' name='sort' onChange={sortHandler} />
					<lable> Name </lable>
					<input
						type='radio'
						value='weight'
						name='sort'
						onChange={sortHandler}
					/>
					<lable> Weight </lable>
				</div>

				<select onChange={changeHandler}>
					<option value='all'>All</option>
					<option value='greased'>Greased</option>
				</select>
			</div>
			<Hogs allHogs={allHogs} />
		</div>
	);
}

export default App;
