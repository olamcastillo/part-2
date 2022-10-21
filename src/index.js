import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Button = ( {handleClick, text}) => {
	return(
		<button onClick={handleClick}>{text}</button>
	)
}

const App = ( { anecdotes } ) => {

	const [selected, setSelected] = useState(0)
	const [random, setRandom] = useState(0)
	const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1  })

	// take index of the item with more votes
	const max = Object.entries(points).reduce(function(prev, curr){
		return prev[1] > curr[1] ? prev : curr;
	})[0];



	// setting random
	const randomNum = () => {
		setRandom(Math.floor(Math.random() * anecdotes.length))
	}

	// call to set random num to set selected number 
	const handleClick = () =>{ 
		randomNum()
		setSelected(random)
	}

	// create a copy of the poins object to avoid problems when changing the state directly
	const votePost = () =>{ 
	const copy = {...points};
	copy[selected]+=1 
	setPoints(copy)
}

  return (
    <div>
      <h2>
			{anecdotes[selected]}
			</h2>
			<p>{points[selected]} votes</p>
			<div>
				<Button handleClick={votePost} text='vote'/>
				<Button handleClick={handleClick} text='next anecdote'/>
			</div>
			<h2>
				Anecdote with most votes
			</h2>
			<p>
				{anecdotes[max]}
			</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App anecdotes={anecdotes}/>)
