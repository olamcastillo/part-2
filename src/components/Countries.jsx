import React from 'react'
import { useState } from 'react'
import Country from './Country'

const Countries = ( { showAll , countries, filterState } ) => {
	const [active, setactive] = useState(false)
	const [newCountry, setnewCountry] = useState({})
	const [reset, setreset] = useState(false)


	let countriesToShow = showAll
		? countries.filter( country => country.name.common.toLowerCase().includes(filterState) ) 
		: []
		

	const displayNewCountry = ( country ) => {
		setactive(true)
		setnewCountry(country)
		setreset(true)
	}

	
	if (countriesToShow.length >= 10) {
		return(
			<div>
				<p>Too many matches, specify another filter</p>
			</div>
		)
	}else if(countriesToShow.length === 1){
		return(
			<Country country={countriesToShow[0]}/>
		)
	}else if (!active){
		return(
			<div>	
				{countriesToShow.map((country) => 
					<div key={country.name.common}>
						<p>
							{country.name.common} 
							<button onClick={() => displayNewCountry(country)}>show</button>
						</p>
					</div>
				)}
			</div>
		)

	}else if(active) {
		return(
			<Country country={newCountry}/>
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
}


export default Countries

