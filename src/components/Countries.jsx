import React from 'react'
import Country from './Country'

const Countries = ( { showAll , countries, filterState, setFilter } ) => {

	const countriesToShow = showAll
		? countries.filter( country => country.name.common.toLowerCase().includes(filterState) ) 
		: []
		


	if(countriesToShow.length === 1) return <Country country={countriesToShow[0]}/>
	if (countriesToShow.length >= 10) return <div><p>Too many matches, specify another filter</p></div>
	
	return countriesToShow.map(country => {
		return (
			<div key={country.name.common}>
				{country.name.common}
				<button value={country.name.common} onClick={(e) => setFilter(e.target.value)}>show</button>	
			</div>
		)
	}
	)
	
}
				
		
	// return (
		
		// <div>
    //   <div>	
		// 		{countriesMatch.map((country) => 
		// 			<div key={country.name.common}>
		// 				<p>{country.name.common} </p>
		// 			</div>
		// 		)} 
				
		// 	</div>
		// </div>
	// )



export default Countries

