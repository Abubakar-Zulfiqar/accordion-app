import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import AccordionData from './AccordionData'
import Component from './Component'

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route exact path='/' element={<AccordionData />} />
          <Route path='/component/:department' element={<Component />} />
        </Routes>
      </Container>
    </>
  )
}

export default App