import React from 'react'

export const Card1 = (props) => {
    return (
        <>
    {props.details.map((value,index)=>(
        <div key={index} className='imagehead'>
        <div className='image'>
        <img src={value.img} ></img>
        </div>
        <div className='title'>
            <p>{value.title}</p>
</div>
</div>
            ))}
            
    

        
        </>

          
        )
    }