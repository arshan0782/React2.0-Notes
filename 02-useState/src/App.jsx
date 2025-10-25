import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState(10)


    function updateNum(){
        setNum(num + 1)
    }
    const changeDec =()=> setNum(num - 1)

  return (
   <div>
     <h1 className='heading'>Value of a is {num}</h1>
    <button onClick={updateNum}> Increase</button>
    <button onClick={changeDec}> Decrease</button>
    <button onClick={()=> setNum(num * 2)}> Double</button>
    <button onClick={()=> setNum(0)}> Reset</button>
   </div>
  )
}

export default App