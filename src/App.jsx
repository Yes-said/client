import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import Layout from './Layout'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage />} />
      <Route path='/login' element= {<LoginPage />}/>
      </Route>
    </Routes>
  )
}

export default App