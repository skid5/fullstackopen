import { useState } from 'react'

const Header = ({ text }) => <div><h1>{text}</h1></div>

const StatsLine = ({ text, value} ) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const Stats = ({ good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
      <StatsLine text="good" value={good}/>
      <StatsLine text="neutral" value={neutral}/>
      <StatsLine text="bad" value={bad}/>
      <tr><td>all</td><td>{total}</td></tr>
      <tr><td>average</td><td>{(good-bad)/total}</td></tr>
      <tr><td>positive</td><td>{good/total*100}%</td></tr>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text}) => {
  return(
  <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackTypes = ['good','neutral','bad']
  const feedbackHeader = 'give feedback'
  const statsHeader = 'statistics'

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
      <Header text={feedbackHeader} />
      <Button handleClick={handleGood} text={feedbackTypes[0]} />
      <Button handleClick={handleNeutral} text={feedbackTypes[1]} />
      <Button handleClick={handleBad} text={feedbackTypes[2]} />
      <Header text={statsHeader} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App