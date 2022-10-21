import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }


// 	const Header = (props) => {
// 		return(

// 				<h1>
// 					{props.course.name}
// 				</h1>
// 		)
// 	}

// 	const Content = (props) => {
// 		return(
// 			<div>
// 				<Part part={props.course.parts[0]} exercises={props.course.parts[0]}/>
// 				<Part part={props.course.parts[1]} exercises={props.course.parts[1]}/>
// 				<Part part={props.course.parts[2]} exercises={props.course.parts[2]}/>
// 			</div>

// 		)
// 	}

// 	const Part = (props) => {
// 		return(
// 			<p>
// 					{props.part.name} {props.part.exercises}
// 			</p>
// 		)
// 	}

// 	const Total = (props) => {

// 		return(
// 			<p>
// 					Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
// 			</p>
// 		)
// 	}

// 	return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   )
// }


const Button = ( {handleGood, text}) => {
	return(
		<button onClick={handleGood}>{text}</button>
	)
}

const Total = ( {good, neutral, bad}) => {
	const all 		 = good + neutral + bad,
				average  = (good-bad)/all,
				positive = (good*100)/all;
	return(
		<div>
			<p>all {all}</p>
			<p>average {average}</p>
			<p>positive {positive} %</p>
		</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

	const handleGood = () => {
		setGood(good+1)
	}
	const handleNeutral = () => {
		setNeutral(neutral+1)
	}
	const handleBad = () => {
		setBad(bad+1)
	}

  return (
    <div>
      <div>
				<h2>
					Give Feedback
				</h2>
				<Button handleGood={handleGood} text='good'/>
				<Button handleGood={handleNeutral} text='neutral'/>
				<Button handleGood={handleBad} text='bad'/>
			</div>
			<div>
				<h2>
					Statistics
				</h2>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
				<Total good={good} neutral={neutral} bad={bad}/>
			</div>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)


// ReactDOM.render(<App />, document.getElementById('root'))