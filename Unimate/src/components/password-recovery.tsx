import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sign-in.css'

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 복구 로직은 서버 연동 후 구현
    setSubmitted(true)
  }

  return (
    <div className="signin-page">
      <nav className="top-nav">
        <div className="nav-brand">
          <h1 className="university-title">Help University</h1>
        </div>
        <div className="nav-menu">
          <Link to="/signin" className="nav-link">Sign in</Link>
          <Link to="/signup" className="nav-link">Sign up</Link>
        </div>
        <div className="nav-user">
          <div className="settings-icon">⚙️</div>
        </div>
      </nav>

      <main className="main-content">
        <div className="signin-card">
          <div className="signin-header">
            <h2 className="signin-title">Password Recovery</h2>
          </div>
          {submitted ? (
            <p style={{ color: '#333' }}>If an account with that email exists, we sent a reset link.</p>
          ) : (
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <label htmlFor="recoveryEmail" className="form-label">EMAIL</label>
                <input
                  type="email"
                  id="recoveryEmail"
                  name="recoveryEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="signin-button">Send reset link</button>

              <div className="signin-footer">
                <p>Remembered your password? <Link to="/signin" className="signup-link">Back to sign in</Link></p>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}

export default PasswordRecovery


