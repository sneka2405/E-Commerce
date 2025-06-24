import React from 'react'

export const Card7 = (props) => {
  return (
    <>
    {props.details7.map((value,index)=>(

        <div key={index} >
            <div className='boating'>
            <img src={value.img} height='250px' width='200' className='boating'></img>
            <div className='airpod2'>
            <div className='centre'>{value.hours}</div>
        <p>
            <h4>{value.title}</h4>
            price:{value.price}<button className='but'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add To Card</button>

            </p>

        </div>
            
                </div>
                </div>
            
        
        
        
        
            ))}
            </>
          )
        }