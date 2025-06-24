import React from 'react'

export const Card5 = (props) => {
  return (
    <>
    {props.details5.map((value,index)=>(

<div key={index} className='pickhead'>
    <div className='picking'>
    <img src={value.pick} height='250px' width='250px' className='picking'></img>
    
    <div className='airpod'>
        <div className='centre'>{value.hours}</div>
        <p>
            <h4>{value.title}<h3>price:{value.price}<button className='but'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add To Card</button></h3></h4>

            </p>
        </div>
        </div>
        </div>
    




    ))}
    </>
  )
}