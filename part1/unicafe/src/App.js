import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button counter={good} setMethod={setGood} text="good"></Button>
      <Button counter={neutral} setMethod={setNeutral} text="neutral"></Button>
      <Button counter={bad} setMethod={setBad} text="bad"></Button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>

  )
}
function Statistics(props) {
  let all = props.good + props.neutral + props.bad;
  let statistics; 
  let avg = (props.good - props.bad) / all;
  let positive = (props.good / all) * 100;
  if (all > 0) {
      statistics = (
        <div className='feedback result'>
          <table>
            <StatisticsLine text="good" value={props.good}/>
            <StatisticsLine text="neutral" value={props.neutral}/>
            <StatisticsLine text="bad" value={props.bad}/>
            <StatisticsLine text="all" value={all}/>
            <StatisticsLine text="average" value={avg}/>
            <StatisticsLine text="positive" value={positive + "%"}/>
          </table>
        </div>
      )
  }
  else {
    statistics = (
      <div className='feedback result'>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      {statistics}
    </div>
  )
}

function StatisticsLine(props) {
  return (  
  <div>
    <tr> 
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  </div>
  )
}


const Button = (props) => {
  const increaseByOne = () => {
    props.setMethod(props.counter + 1);
    console.log("increase", props.text ,"by one, old value:", props.counter," - new value:", props.counter + 1);
  }
  return <button onClick={increaseByOne}>{props.text}</button>
} 


export default App