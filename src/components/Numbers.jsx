import React from 'react'

const Numbers = ( { showAll, persons, filterState } ) => {
	const personsToShow = showAll
		? persons 
		: persons.filter(person => person.name.toLowerCase().includes(filterState))
	return (
		<div>
			<h2>Numbers</h2>
      <div>	
				{personsToShow.map((person) => 
					<p key={person.id}>
						{person.name} : {person.number}
					</p>
				)} 
			</div>
		</div>
	)
}

export default Numbers