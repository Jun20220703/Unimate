import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import PasswordRecovery from './components/password-recovery'
import HomePage from './components/homePage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/forgot-password" element={<PasswordRecovery />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
