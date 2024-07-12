import { useState, useEffect } from 'react'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    setGood(() => good + 1)
    setTotal(() => total + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(() => neutral + 1)
    setTotal(() => total + 1)
  }
  const handleBadClick = () => {
    setBad(() => bad + 1)
    setTotal(() => total + 1)
  }

  useEffect(() => {
    if(total !== 0) {
      setAverage((good-bad) / total)
      setPositive((good/total) * 100)
    }
  }, [total])

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App
