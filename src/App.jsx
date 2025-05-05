import { useState } from 'react'
import Accordian from './Components/01miniProject'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-black text-white'>
<Accordian/>
   </div>
  )
}

export default App
