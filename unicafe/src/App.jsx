import { useState, useEffect } from 'react'

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive} %</p>
    </div>
  )
}

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
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive}
      />
    </div>
  )
}

export default App
