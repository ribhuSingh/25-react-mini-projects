import { useState } from 'react'
import Accordian from './Components/01miniProject'
import './App.css'
import RandomColor from './Components/02miniProject/RandomColor'
import StarRating from './Components/03miniProject/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-black text-white'>
   <Accordian/>
   <RandomColor/>
   <StarRating noOfStars={10}/>
 
   </div>
  )
}

export default App
