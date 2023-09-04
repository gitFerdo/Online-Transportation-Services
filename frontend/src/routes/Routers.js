import React from 'react' 
import { Routes, Route, Navigate } from 'react-router-dom'

import Transport from './../pages/Transport'
import SearchResult from '../pages/SearchResult'
import SelectedDetails from './../pages/SelectedDetails'
import Thankyou from '../pages/Thankyou'
import Login from '../pages/Login'

const Routers = () => {
  return (
      <Routes>
        <Route path='/' element={ <Navigate to='/transport' /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/transport' element={ <Transport /> } />
        <Route path='/transport/search' element={<SearchResult/>} />
        <Route path='/thank-you' element={<Thankyou/>} />
        <Route path='/transport/:id' element={ <SelectedDetails /> } />
    </Routes>
  )
}

export default Routers