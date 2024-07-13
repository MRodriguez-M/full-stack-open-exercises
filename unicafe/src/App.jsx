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
      <table>
        <thead>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={props.total} />
          <StatisticLine text='average' value={props.average} />
          <StatisticLine text='positive' value={props.positive} />
        </thead>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
      <Button handleClick={handleGoodClick} name='good' />
      <Button handleClick={handleNeutralClick} name='neutral' />
      <Button handleClick={handleBadClick} name='bad' />
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
