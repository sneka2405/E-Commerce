import React from 'react'
import { Nav } from './nav'
import { Router } from './router'
import { BrowserRouter} from 'react-router-dom'

export const Browser = () => {
  return (
    <div>
      <BrowserRouter>
     <Nav></Nav>
     <Router></Router>
     </BrowserRouter>
     </div>
  )
}