import React from 'react'

const Total = ( { course } ) => {

	const total = course.parts.reduce((prev, curr) => prev + curr.exercises,0);
	return (
		<p style={{fontWeight: 'bold'}}>
			{`Total of ${total} exercices`}
		</p>
	)
}

export default Total