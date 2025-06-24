import React from 'react'
// import { Link } from 'react-router-dom'

export const Card9 = (props) => {
  return (
    <>
    {props.details9.map((value,index)=>(
        <div key={index} className='blogs'width='1490px'>
        <div className='blogpic'>
        
        <img src={value.img} width='350px' height='250px' className='image'>
        {/* <Link  to="/niruvanaicon"></Link> */}
        </img>
        
       
         {<div className='blogcontent'>
        <div className='content'>{value.date}</div>
            <p>
            <h4>{value.title}<h3>{value.use}<button className='touse'>Read more</button></h3></h4>

            </p>
        </div> }
        </div> 
        
        </div>
        
        
            ))}
    </>
  )
}