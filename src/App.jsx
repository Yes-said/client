import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhhost:4000';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage />} />
      <Route path='/login' element= {<LoginPage />}/>
      <Route path='/Register' element= {<RegisterPage />}/>
      </Route>
    </Routes>
  )
}

export default App
