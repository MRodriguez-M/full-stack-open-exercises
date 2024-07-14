import { useState, useEffect } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [voteCount, setVoteCount] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [highestAnecdote, setHighestAnecdote] = useState(anecdotes[0])
  const [highestVote, setHighestVote] = useState(voteCount[0])

  const handleRandomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteCount = () => {
    setVoteCount((prev) => {
      let copyArr = [...prev];
      copyArr[selected] += 1;
      return copyArr;
    })
  }

  useEffect(() => {
    if(voteCount[selected] > highestVote) {
      setHighestAnecdote(anecdotes[selected]);
      setHighestVote(voteCount[selected]);
    }
  }, [voteCount]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteCount[selected]} votes</p>
      <button onClick={handleVoteCount}>vote</button>
      <button onClick={handleRandomNumber}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{highestAnecdote}</p>
      <p>has {highestVote} votes</p>
    </div>
  )
}

export default App
