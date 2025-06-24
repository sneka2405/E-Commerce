import React from 'react'
import { Card1 } from './card1'
import Data1 from './data1'
import { Card2 } from './card2'
import Data2 from './data2'
import { Card3 } from './card3'
import Data3 from './data3'
import { Card4 } from './card4'
import Data4 from './data4'
import { Card5 } from './card5'
import Data5 from './data5'
import { Card6 } from './card6'
import Data6 from './data6'
import { Card7 } from './card7'
import { Card8 } from './card8'
import { Card9 } from './card9'
import { Card10 } from './card10'
import { Card11 } from './card11'
import Logo from'./logo.svg'
import { Link } from 'react-router-dom'
import Data7 from './data7'
import Data8 from './data8'
import Data9 from './data9'
import Data10 from './data10'
import Data11 from './data11'
import Socialmedia from './socialmedia.png'




export const Home = () => {
  return (
    <>
    
    <div className='homecard'>
        <Card1 details={Data1}></Card1>
    </div>
    <div>
      <div className='fest'>
      <h2>&nbsp;&nbsp;&nbsp;Monsoon&nbsp;&nbsp;𝐅𝐞𝐬𝐭 </h2> 
      </div>
      <div className='mon'>
        <img src='https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web-2_1600x.png?v=1721822576' width='1490px' height='150px' className='mon'></img> 
      </div>
      <div className='homecard2'>
      <Card2 details2={Data2}></Card2>
    </div>
      <div>
      <Link to="/categories"><h2>&nbsp;&nbsp;&nbsp;Shop by Categories</h2></Link>
      </div>
      <div className='homecard3'>
        <Card3 details3={Data3}></Card3>
      </div>
      <div>
      <Link to="/bestseller"><h2>&nbsp;&nbsp;&nbsp;Explore Bestseller</h2></Link> 
      </div>
      <div className='homecard4'>
        <Card4 details4={Data4}></Card4>
      </div>
      <div className='picks'>
      <Link to="/toppicks"><h2>&nbsp;&nbsp;&nbsp;Top picks for you</h2></Link> 
    </div>
    <div className='homecard5'>
           
         <Card5 details5={Data5}></Card5>
      </div>
      <div>
      <Link to="/lifestyle"><h2>&nbsp;&nbsp;&nbsp;Shop by Lifestyle</h2></Link> 
      </div>
      <div className='homecard5'>
        <Card6 details6={Data6}></Card6>
      </div>
      <div>
      <Link to="/best"><h2>&nbsp;&nbsp;&nbsp;Best Of boAt</h2></Link> 
      </div>
      <div className='homecard5'>
        <Card7 details7={Data7}></Card7>
      </div>
      <div>
      <Link to="/tribes"><h2>&nbsp;&nbsp;&nbsp;Join the Tribe</h2></Link>
      </div>
      <div className='homecard5'>
        <Card8 details8={Data8}></Card8>
      </div>
      <div>
      <Link to="/blogs"><h2>&nbsp;&nbsp;&nbsp;Blogs</h2></Link>  
      </div>
       <div className='homecard5'>
        <Card9 details9={Data9}></Card9>
      </div> 
      <div>
      <Link to="/press"><h2>&nbsp;&nbsp;&nbsp;In the Press</h2></Link>  
      </div>
      <div className='businessworld'>
        <Card10 details10={Data10}></Card10>
      </div>
      <div className='contact'>
       <img src={Logo} width='130px' height='130px' className='logo'></img> 
      <h3>&nbsp;&nbsp;&nbsp;Subscribe to our email alerts!</h3> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' className='text'  placeholder='enter your email address'></input>
      </div>
    </div>
    <div className='features'>
        <Card11 details11={Data11}></Card11>
      </div> 
      <div className='social'>
        <img src={Socialmedia} height='250px' width='1490' ></img>
      </div>
    </>
  )
}