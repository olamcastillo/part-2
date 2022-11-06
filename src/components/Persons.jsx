import React from 'react'
import personServices from '../services/personServices'

const Persons = ( { showAll, persons, filterState, resetPersons} ) => {
	const personsToShow = showAll
		? persons 
		: persons.filter(person => person.name.toLowerCase().includes(filterState))

	const deletePerson = (person) => {
		if(window.confirm(`Delete ${person.name} ?`)){
			personServices
			.deletePerson(person.id)
			.then(response => resetPersons())
		}
	} 
	return (
		<div>
      <div>	
				{personsToShow.map((person) => 
					<p key={person.id}>
						{person.name} : {person.number}
						<button onClick={() => deletePerson(person)}>delete</button>
					</p>
				)} 
			</div>
		</div>
	)
}

export default Persons