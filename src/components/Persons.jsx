import React from 'react'

const Persons = ( { showAll, persons, filterState } ) => {
	const personsToShow = showAll
		? persons 
		: persons.filter(person => person.name.toLowerCase().includes(filterState))
	return (
		<div>
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

export default Persons