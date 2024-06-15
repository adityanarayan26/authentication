import React from 'react'
import FirstTab from './components/firstTab'
import SecondTab from './components/secondTab'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen w-full bg-zinc-900 flex justify-center items-center'>
        <div className='h-1/2 w-1/2 p-10 bg-zinc-200 rounded-xl'>
          <Routes>
            <Route path='/' element={<FirstTab />} />
            <Route path='/2' element={<SecondTab />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App