import React from 'react'

export const Card8 = (props) => {
  return (
    <>
    {props.details8.map((value,index)=>(

        <div className='index' key={index}>
         <div className='sleepvideo'>
            <video src={value.vid} height='400px' width='300px'></video>
         </div>
        <div className='airpod'>
            <h3>{value.title}</h3>
            <h5>{value.content}</h5>
            <button height='50px' width='50px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Read more</button>
        </div>
           
        </div>
        
        
        
            ))}
             
            </>

  )
}