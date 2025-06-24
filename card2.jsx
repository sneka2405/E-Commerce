import React from 'react'
// import { Link } from 'react-router-dom'

export const Card2 = (props) => {
  return (
    <>
    {props.details2.map((value,index)=>(
        <div key={index} className='imagehead2'width='1490px'>
        <div className='image2'>
        
        <img src={value.img} width='150px' height='250px' className='image2'>
        {/* <Link  to="/niruvanaicon"></Link> */}
        </img>
        
       
        <div className='airpod'>
        <div className='centre'>{value.hours}</div>
            <p>
            <h4>{value.title}<h3>price:{value.price}<button className='but'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add To Card</button></h3></h4>

            </p>
        </div>
        </div>
        
        </div>
        
        
            ))}
    </>
  )
}