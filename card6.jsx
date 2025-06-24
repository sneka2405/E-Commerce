import React from 'react'

export const Card6 = (props) => {
  return (
    <>
    {props.details6.map((value,index)=>(

<div key={index} >
    <div className='shoping'>
    <img src={value.shop} height='500px' width='190' className='shoping'></img>
    <div className='shopbody'>
         {value.title}
        <h5>View All</h5>
        </div>
        </div>
        </div>
    




    ))}
    </>
  )
}