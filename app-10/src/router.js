import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Details from './Details'


export const router = () => {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}

export default router;

