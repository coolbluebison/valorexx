import { useState } from 'react'
import Excel from './Excel/Excel'

function App() {


  return (
    <div className='h-screen w-screen bg-gray-200 flex items-center justify-center'>
      <div className='h-[90vh] w-[99vw] bg-white rounded-lg'></div>
      <Excel />
    </div>
  )
}

export default App
