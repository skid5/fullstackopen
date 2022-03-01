import { useState } from 'react'

const Button = ( {handleClick, text} ) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const Votes = ({ value }) => {
  return(
  <>
  <p>has {value} votes</p>
  </>
  )
}

const Header = ({text}) => {
  return(
    <>
    <h1>{text}</h1>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  //probably not the best way, but the last entry of the array is used to store the index
  //of the largest entry in the rest of the array
  //to use for displaying the anecdote with most votes
  const [points, setPoints] = useState(Array(anecdotes.length+1).fill(0))

  const HandleAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  //the last element is used as a index for the one with most votes
  //selected cant get a value to match the last index
  //length of anecodes-list is the last index
  const HandlePoints = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    const max_index = copy.slice(0,-1).indexOf(Math.max(...copy.slice(0,-1)))
    copy[anecdotes.length] = max_index
    setPoints(copy)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <Votes value={points[selected]} />
      <Button handleClick={HandleAnecdote} text="Next anecdote" />
      <Button handleClick={HandlePoints} text="Vote" />
      <Header text="Anecdote with most votes" />
      <p>{anecdotes[points[anecdotes.length]]}</p>
      <Votes value={points[points[anecdotes.length]]} />
    </div>
  )
}

export default App