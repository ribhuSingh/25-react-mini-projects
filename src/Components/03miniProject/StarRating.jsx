import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({noOfStars=5}) => {
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    const handleClick=(getCurrentIndex)=>{
        console.log(getCurrentIndex,'mouseClicked')
        setRating(getCurrentIndex)


    }
    const handleMouseEnter=(getCurrentIndex)=>{
        console.log(getCurrentIndex,'mouseEnter')
        setHover(getCurrentIndex)

    }
    const handleMouseLeave=(getCurrentIndex)=>{
        console.log(getCurrentIndex,'mouseLeft')
        setHover(0)
    }
  return (
    <div className='min-h-screen text-center bg-amber-700'>
        <h1 className='text-3xl'>3rd Mini Project</h1>
        <div className='flex justify-center mt-10 '>
        {
            [...Array(noOfStars)].map((_,index)=>{
                const starIndex=index+1
             return <FaStar key={starIndex}
             onClick={()=>handleClick(starIndex)}
             onMouseEnter={()=>handleMouseEnter(starIndex)}
             onMouseLeave={()=>handleMouseLeave()}
             color={hover ? (starIndex <= hover ? '#ffc107' : '#e4e5e9') : (starIndex <= rating ? '#ffc107' : '#e4e5e9')}

             size={40}
           /> })
        }
        </div>
      
    </div>
  )
}

export default StarRating
