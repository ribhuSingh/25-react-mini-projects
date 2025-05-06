import React, { useState } from 'react'

const RandomColor = () => {
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000000')
    const randomColorUtility=(length)=>{
        return Math.floor(Math.random()*length)
    }
    const handleCreateRandomHexColor=()=>{
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor='#'
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
        console.log('hexfunction clicked')
        console.log(color)

    }
    const handleCreateRandomRgbColor=()=>{
        const r=randomColorUtility(256)
        const g=randomColorUtility(256)
        const b=randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`);
        console.log('rgb function created')
        console.log(color)

    }

  return (
    <div className={`min-h-screen  `} style={{backgroundColor:color}} >
        <h1 className='text-3xl text-center'>Second Mini Project Random Color Generator</h1>
        <div className='flex justify-center'>
        <button onClick={()=>setTypeOfColor('hex')} className='p-2 m-2 bg-amber-950 rounded-2xl'>Create HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgb')} className='p-2 m-2 bg-amber-950 rounded-2xl'>Create RGB Color</button>
        
        <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor}className='p-2 m-2 bg-amber-950 rounded-2xl '>Generate Random Color</button>
        </div>
        <h2 className='text-center text-2xl pt-20'>{color}</h2>
    </div>
  )
}

export default RandomColor
