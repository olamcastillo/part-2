import React, { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personServices from './services/personServices';

// import Countries from './components/Countries';

const App = () => {


const [persons, setPersons] = useState([])
const [ newName, setNewName ] = useState('add name')
const [ newNumber, setNewNumber ] = useState('')
const [ filterState, setFilterState ] = useState('')
const [ showAll, setShowAll ] = useState(true);

useEffect(() => {
	personServices
		.getAll()
		.then(initialPersons => {
			setPersons(initialPersons)
		})
	}, [])
	const resetPersons = () => {
		personServices
		.getAll()
		.then(initialPersons => {
			setPersons(initialPersons)
		})
	}
	

return (
	<div>
		<h2>Phonebook</h2>
		<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
		<PersonForm persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons}/>
		<h2>Numbers</h2>
		<Persons resetPersons={resetPersons} showAll={showAll} persons={persons} filterState={filterState} />
	</div>
	)



//countries app
// const [countries, setCountries] = useState([])
// const [ filterState, setFilterState ] = useState('')
// const [ showAll, setShowAll ] = useState(true)

// const setFilter = (e) => {
// 	setFilterState(e.toLowerCase())
// }

// useEffect(() => {
// 	axios
// 		.get('https://restcountries.com/v3.1/all')
// 		.then(response => {
// 			setCountries(response.data)
// 		})
// 	}, [])

// 	return(
// 		<div>
// 			<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
// 			<Countries showAll={showAll} setShowAll={setShowAll} countries={countries} filterState={filterState} setFilter={setFilter} />
// 		</div>

// 	)

}

export default App




