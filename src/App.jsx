import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    <>
      <div className='body' style={{backgroundColor: color}}>
        <div className="content" >
          <button className='btn' style={{backgroundColor: 'red'}} onClick={() => setColor('Red')}>Red</button>
          <button className='btn' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='btn' style={{backgroundColor: 'white' ,color:'black'}} onClick={() => setColor('white')}>White</button>
          <button className='btn' style={{backgroundColor: 'pink', color:'black'}} onClick={() => setColor('pink')}>Pink</button>
          <button className='btn' style={{backgroundColor: 'black'}} onClick={() => setColor('black')}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App
