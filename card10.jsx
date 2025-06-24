import React from 'react'

export const Card10 = (props) => {
  return (
    <>
    {props.details10.map((value,index)=>(

<div key={index} >
    <div className='businessworld'>
    <img src={value.img} height='300px' width='1490' className='businessworld'></img>
    {/* <div className='shopbody'>
         {value.title}
        <h5>View All</h5>
        </div> */}
        </div>
        </div>
    




    ))}
    </>
  )
}
