import React from 'react'

const PersonForm = ( { persons, newName, setNewName, newNumber, setNewNumber, setPersons } ) => {
	const addPerson = (event) => {
		event.preventDefault();
		if(persons.map(person => person.name).includes(newName))  {
			alert(`${newName} is already added to phonebook`)
			setNewName('')
		}else {
			const personObject = {
				name: newName,
				id: persons.length + 1,
				number: newNumber
			}
			setPersons(persons.concat(personObject))
			setNewName('')
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