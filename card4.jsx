import React from 'react'

export const Card4 = (props) => {
  return (
    <>
    {props.details4.map((value,index)=>(

<div key={index}>
    <div className='video'>
    {/* <video >       </video>src={value.video} */}
    <video src={value.video} width="280px" height="300px" controls poster>
    </video>
    </div>
    <div>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {value.title}</h3>
    </div>
   
</div>
 ))}
 </>
)
}