import React, { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personServices from './services/personServices';
import Notification from './components/Notification';
import ErrNotification from './components/ErrNotification';

// import Countries from './components/Countries';

const App = () => {

const [persons, setPersons] = useState([]);
const [ newName, setNewName ] = useState('add name');
const [ newNumber, setNewNumber ] = useState('');
const [ filterState, setFilterState ] = useState('');
const [ showAll, setShowAll ] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);

const setMessage = ( option, obj ) => {
	if(option === 'changed number'){
		setSuccessMessage(`Changed ${obj.name}'s number`)
			setTimeout(() => {
				setSuccessMessage(null)
			}, 5000);
		}
	if(option === 'person added') {
		setSuccessMessage(`Added ${obj.name}`)
			setTimeout(() => {
				setSuccessMessage(null)
			}, 5000);
		}
	if(option === 'error') {
		setErrorMessage(`Information of ${obj.name} has already been removed from server`)
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000);}
}


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
		<Notification successMessage={successMessage} />
		<ErrNotification errorMessage={errorMessage} />
		<Filter filterState={filterState} setFilterState={setFilterState} setShowAll={setShowAll}/>
		<PersonForm persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} setMessage={setMessage}/>
		<h2>Numbers</h2>
		<Persons resetPersons={resetPersons} showAll={showAll} persons={persons} filterState={filterState} setMessage={setMessage} />
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




