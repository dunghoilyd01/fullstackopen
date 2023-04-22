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
    </div>
  )
}
function Statistics(props) {
  let all = props.good + props.neutral + props.bad;
  let Statistics; 
  let avg = (props.good - props.bad) / all;
  let positive = (props.good / all) * 100;
  if (all > 0) {

  }
}

const Button = (props) => {
  const increaseByOne = () => {
    props.setMethod(props.counter + 1);
    console.log("increase", props.text ,"by one, old value:", props.counter," - new value:", props.counter + 1);
  }
  return <button onClick={increaseByOne}>{props.text}</button>
} 


export default App