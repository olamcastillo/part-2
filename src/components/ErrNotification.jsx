import React from 'react'

const ErrNotification = ( { errorMessage } ) => {
	
	if(errorMessage === null) return null
	return (
		<div className='error'>{errorMessage}</div>)


}

export default ErrNotification