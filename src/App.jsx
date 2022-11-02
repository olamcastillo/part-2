import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
// import PersonForm from './components/PersonForm';
// import Persons from './components/Persons';
import Countries from './components/Countries';
import axios from 'axios'




const App = () => {

	const [countries, setCountries] = useState([])
	const [ filterState, setFilterState ] = useState('')
	const [ showAll, setShowAll ] = useState(true)

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then(response => {
				setCountries(response.data)
			})
		}, [])

		return(
			<div>
				<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
				<Countries showAll={showAll} setShowAll={setShowAll} countries={countries} filterState={filterState}/>
			</div>
		)

	// const [persons, setPersons] = useState([])
  // const [ newName, setNewName ] = useState('add name')
	// const [ newNumber, setNewNumber ] = useState('')
	// const [ filterState, setFilterState ] = useState('')
	// const [ showAll, setShowAll ] = useState(true)
	
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3001/persons')
	// 		.then(response => {
	// 			setPersons(response.data)
	// 		})
	// 	}, [])
	

  // return (
  //   <div>
  //     <h2>Phonebook</h2>
	// 		<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
	// 		<PersonForm persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons}/>
	// 		<h2>Numbers</h2>
  //     <Persons showAll={showAll} persons={persons} filterState={filterState} />
  //   </div>
  // )
}

export default App 




