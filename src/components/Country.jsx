import React from 'react'

const Country = ( { country } ) => {
	return (
		<div>	
				<div key={country.name.common}>
					<h2>{country.name.common} </h2>
					<p>Capital: {country.capital}</p>
					<p>Area: {country.area}</p>
					<p style={{fontWeight: 'bold'}}>languages:</p>
					<ul>
						{Object.values(country.languages).map(language =>
							<li key={language}>{language}</li>)}
					</ul>
					<img style={{width: '40%'}} src={country.flags.svg}/>
				</div>
		</div>
	)
}

export default Country