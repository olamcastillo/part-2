import React from 'react'
import personServices from '../services/personServices';

const PersonForm = ( { persons, newName, setNewName, newNumber, setNewNumber, setPersons } ) => {
	const addPerson = (event) => {
		event.preventDefault();

		const arrNames = persons.map(person => person.name.toLowerCase())
		const arrIsRepeated = arrNames.map(name => name === newName.toLowerCase().trim())
		const isRepeated = arrIsRepeated.filter( item => item === true)

		if(isRepeated[0] === true) {
			const idRepeated = arrIsRepeated.indexOf(isRepeated[0])
			if(window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new one`)) {
				const persondUpdated = {...persons[idRepeated], number: newNumber}
				personServices
					.update(idRepeated + 1, persondUpdated)
					.then(returnedPerson => {
						setPersons(persons.map(person => person.id != (idRepeated + 1) 
							? person
							: returnedPerson))
						setNewName('')
					})
			}
		}else {
			const personObject = {
				name: newName,
				id: persons.length + 1,
				number: newNumber
			}
			personServices
			.create(personObject)
			.then(returnedPerson => {
				setPersons(persons.concat(returnedPerson))
				setNewName('')
			})
		}

	}

	const handleName = (event) => {
		setNewName(event.target.value)
	}

	const handleNumber = (event) => {
		setNewNumber(event.target.value)
	}
	return (
		<form onSubmit={addPerson}>
        <div>
					<h2>add a new</h2>
          name: <input required value={newName} onChange={handleName}/>
					<br/>
					<br/>
          number: <input required type='number' value={newNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	)
}

export default PersonForm