import React from 'react'

export const Card3 = (props) => {


  return (
    <>
    {props.details3.map((value,index)=>(

        <div key={index} className='categories'>
            <div className='catimage'>
            <img src={value.img} width='130px' height='100px'></img>
            </div>
            <div>
              <h5> {value.title}</h5>
            </div>
        </div>
        
        
        
            ))}
    </>
  )}