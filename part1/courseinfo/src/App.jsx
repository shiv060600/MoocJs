import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'






const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const [selected,setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState(new Array(8).fill(0))

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const maxVotes = Math.max(...anecdoteVotes)
  const maxVotesIndex = anecdoteVotes.indexOf(maxVotes)

  const anecdoteVotesHandler = () => {
    const copy = [...anecdoteVotes]
    copy[selected] += 1
    setAnecdoteVotes(copy)
  }
  
  const anecdotesIncreaseHandler = () => {
    const newIndex = selected + 1 
    setSelected(newIndex)
  }


  const goodClickHandler = () => {
    const newGoodValue = good + 1
    setGood(newGoodValue)
  }
  const badClickHandler = () => {
    const newBadValue = bad + 1
    setBad(newBadValue)
  }

  const neutralClickHander = () => {
    const newNeutralValue = neutral + 1
    setNeutral(newNeutralValue)
  }

  const StatisticLine = ({text,value}) =>{
    return(
      <p>{text} {value}</p>
    )
  }

  const Statistics = ({good,bad,neutral}) => {
    const total = good + bad + neutral;
    const average = good + bad + neutral / 3;
    const positive = (good / total) * 100 ;
    if (total > 0) {
      return(
        <div>
        <p> all {total}</p>
        <p> average {average}</p>
        <p> positive {positive} %</p>
        </div>
      )
    }
    else {
      return (
        <p>No feedback given</p>
      )
    }
  }

  
  return(
    <div>

      <h1>Give Feedback</h1>

      <h1>statistics</h1>

      <button className = "button" onClick={goodClickHandler}>good</button>
      <button className= "button" onClick = {neutralClickHander}>neutral</button>
      <button className = "button" onClick={badClickHandler}>bad</button>

      <StatisticLine text = "good" value={good} />
      <StatisticLine text = "bad" value={bad} />
      <StatisticLine text = "neutral" value={neutral} />

      <Statistics good = {good} bad = {bad} neutral={neutral} />

      <br />
      <p>{anecdotes[selected]}</p>
      <p>has {anecdoteVotes[selected]} votes</p>
      <button className = 'button' onClick={anecdotesIncreaseHandler}>next anecdote</button>
      <button onClick={anecdoteVotesHandler}>vote </button>
      <br />
      
      <p>{anecdotes[maxVotesIndex]} has {maxVotes} votes</p>





    </div>
  )
};

export default App;
