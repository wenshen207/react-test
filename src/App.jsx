import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { twoSum } from './question3'

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
  
    const calculateSum = () => {
      setSum(parseFloat(num1) + parseFloat(num2));
    };

  return (
    <>
    <div className="app-container">
    <Navbar />
       <div className="cal-container" >
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
      />
      <button onClick={calculateSum}>Add Two Numbers</button>
      <p>Total: {sum}</p>

      <p>Question 3 [4, 11, 17, 25], 21 : <b>{twoSum([4, 11, 17, 25], 21)}</b></p>
      <p>Question 3 [0, 1, 2, 2, 3, 5], 4 : <b>{twoSum([0, 1, 2, 2, 3, 5], 4)}</b></p>
      <p>Question 3 [-1, 0], -1 : <b>{twoSum([-1, 0], -1)}</b></p>
    </div>
    </div>
    </>
  )
}

export default App
