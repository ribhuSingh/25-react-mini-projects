import React,{useState} from 'react'
import data from './data'

const Accordian = () => {
  const [selected,setSelected]=useState(null);
  const [enableMultiSelection, setEnableMultiSelection]=useState(false)
  const [multiple,setMultiple]=useState([])
  const handleSingleSelection=(getCurrentId)=>{
      console.log(getCurrentId)
      setSelected(getCurrentId)
  }
  const handleMultiSelection=(getCurrentId)=>{
   console.log(getCurrentId)
   let cpyMultiple=[...multiple];
   const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId)
   if(findIndexOfCurrentId===-1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId,1)
  setMultiple(cpyMultiple)
  }
  
  return (
    <div className='w-2/3 text-center m-auto min-h-screen '>
      <div>
        <button className={`${enableMultiSelection?'bg-amber-700':'bg-amber-950'} p-2 rounded-2xl m-5 text-2xl`}  onClick={()=>setEnableMultiSelection(true)} id='enable'>Enable Multiple selection</button>
        <button className={`${enableMultiSelection?'bg-amber-950':'bg-amber-700' } p-2 rounded-2xl m-5 text-2xl`} onClick={()=>setEnableMultiSelection(false)} >Disable Multiple Selection</button>
      </div>
      { data && data.length>0?
      data.map(dataItem=> < div key={dataItem.id}>
        <div className='text-3xl p-5'>{dataItem.question} <button className='pl-5' onClick={ enableMultiSelection?()=>handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)}>+</button></div>
        <div className='text-xl'>{selected==dataItem.id || 
        multiple.indexOf(dataItem.id)!==-1
        ?dataItem.answer:null}</div>
      </div>)
      :null
    }
    </div>
  )
}

export default Accordian
