import React, { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Numbers from './components/Numbers';



const App = () => {
	const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('add name')
	const [ newNumber, setNewNumber ] = useState('')
	const [ filterState, setFilterState ] = useState('')
	const [ showAll, setShowAll ] = useState(true)

	
	

  return (
    <div>
      <h2>Phonebook</h2>
			<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
			<Form persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons}/>
      <Numbers showAll={showAll} persons={persons} filterState={filterState} />
    </div>
  )
}

export default App 




