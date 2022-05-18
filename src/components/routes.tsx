import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import { PrivateRoute } from './PrivateRoute';

export default function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <PrivateRoute path='/dash' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
  )
}
