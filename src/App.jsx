import { useState } from 'react'
import Accordian from './Components/01miniProject'
import './App.css'
import RandomColor from './Components/01miniProject/02miniProject/RandomColor'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-black text-white'>
   <Accordian/>
   <RandomColor/>
 
   </div>
  )
}

export default App
