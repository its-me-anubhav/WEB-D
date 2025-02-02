import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <div className='text-2xl text-center font-bold display-flex justify-centre 
  p-40 m-20 bg-red-400 hover:bg-blue-400 hover:duration-500'>HEY!</div>
    </>
  )
}

export default App