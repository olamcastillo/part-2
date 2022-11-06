import React from 'react'

const Filter = ( { filterState, setFilterState, setShowAll } ) => {

	const handleFilter = (event) => {
		setFilterState(event.target.value);
		setShowAll(false)
		if(filterState === '') setShowAll(true);
		
	}
	return (
		<div>
				filter shown with <input type="text" value={filterState} onChange={handleFilter}/>
		</div>
	)
}

export default Filter



//filter country
// import React from 'react'

// const Filter = ( { filterState, setFilterState, setShowAll } ) => {

// 	const handleFilter = (event) => {
// 		setFilterState(event.target.value);
// 		setShowAll(true)
// 		if(filterState === '') setShowAll(false);
	
	
// 	}
// 	return (
// 		<div>
// 				filter countries <input type="text" value={filterState} onChange={handleFilter}/>
// 		</div>
// 	)
// }

// export default Filter


