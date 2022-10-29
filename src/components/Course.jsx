import React from "react";
import Part from './Part'

const Course = ({ course}) => {
	return(
		<div>
			{course.map((course) => (
				<Part key={course.id} course={course}/>
			))}

		</div>
	)
}

export default Course