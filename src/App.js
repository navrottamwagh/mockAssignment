import React from 'react'
import CutShort from './CutShort'
import CutShort2 from './CutShort2'
import CutShort3 from './CutShort3'
import CutShort4 from './CutShort4'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<CutShort/>}/>
      <Route path='/first' element={<CutShort2/>}/>
      <Route path='/second' element={<CutShort3/>}/>
      <Route path='/third' element={<CutShort4/>}/>


    </Routes>

  </Router>
    
  )
}

export default App
