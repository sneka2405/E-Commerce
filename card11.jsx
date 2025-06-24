import React from 'react'

export const Card11 = (props) => {
  return (
    <>
    {props.details11.map((value,index)=>(

<div key={index} >
    <div className='features'>
    <img src={value.img} height='600px' width='1490' className='features'></img>
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
