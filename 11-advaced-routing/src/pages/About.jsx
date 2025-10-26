import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {
  let navigate = useNavigate()

  const  btnCliked =()=>{
   navigate('/')
    
  }

  return (
    <div className='about-content'>
      <button onClick={btnCliked} className='btn'>Go Home Page</button>
        <h1>About Page</h1>
    </div>
  )
}

export default About