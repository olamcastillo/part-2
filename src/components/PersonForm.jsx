import React from 'react'
import personServices from '../services/personServices';

const PersonForm = ( { persons, newName, setNewName, newNumber, setNewNumber, setPersons, setMessage } ) => {
	const addPerson = (event) => {
		event.preventDefault();

		const arrNames = persons.map(person => person.name.toLowerCase())
		const arrIsRepeated = arrNames.map(name => name === newName.toLowerCase().trim())
		const isRepeated = arrIsRepeated.filter( item => item === true)

		if(isRepeated[0] === true) {
			const id = persons[arrIsRepeated.indexOf(isRepeated[0])].id
			const person = persons.find(person => person.id === id)
			if(window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new one`)) {
				const persondUpdated = {...person, number: newNumber}
				personServices
					.update(id, persondUpdated)
					.then(returnedPerson => {
						setPersons(persons.map(person => person.id != id 
							? person
							: returnedPerson))
						setNewName('')
						setMessage('changed number',returnedPerson)
					})
					.catch(error => {
						setMessage('error', persondUpdated)
					})
			}
		}else {
			const personObject = {
				name: newName,
				number: newNumber
			}
			console.log(personObject.id);

			personServices
			.create(personObject)
			.then(returnedPerson => {
				console.log(returnedPerson);
				setPersons(persons.concat(returnedPerson))
				setNewName('')
				setMessage('person added',returnedPerson)
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