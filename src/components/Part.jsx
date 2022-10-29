import React from 'react';
import Total from './Total';

const Part = ( { course } ) => {
	return (
		<div>
			<h2>
			{course.name}
			</h2>
			{course.parts.map((part) => (
				<p key={part.id}>{`${part.name} ${part.exercises}`}</p>
			))}
			<Total course={course}/>
		</div>
	)
}

export default Part