import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'

function App() {
  return (
    <>
      <Routes>
        <Route to="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
