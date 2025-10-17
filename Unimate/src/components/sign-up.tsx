import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './sign-up.css';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    major: '',
    password: '',
    confirmPassword: ''
  });
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 이메일 검증
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 여기에 회원가입 로직 추가
  };

  return (
    <div className="signup-page">
      <Navigation />

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 회원가입 카드 */}
        <div className="signup-card">
          <div className="signup-header">
            <h2 className="signup-title">Create Account</h2>
            <p className="signup-subtitle">Join Help University Community</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            {/* 이름 필드들 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            {/* 이메일 필드 */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${emailError ? 'form-input-error' : ''}`}
                placeholder="Enter your email address"
                required
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            {/* 학번 필드 */}
            <div className="form-group">
              <label htmlFor="studentId" className="form-label">Student ID</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your student ID (e.g., B2400566)"
                required
              />
            </div>

            {/* 학과 선택 */}
            <div className="form-group">
              <label htmlFor="major" className="form-label">Major</label>
              <select
                id="major"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select your major</option>
                <option value="Bachelor of Information Technology">Bachelor of Information Technology</option>
                <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
                <option value="Bachelor of Computer Science">Bachelor of Computer Science</option>
                <option value="Bachelor of Engineering">Bachelor of Engineering</option>
                <option value="Bachelor of Arts">Bachelor of Arts</option>
                <option value="Bachelor of Science">Bachelor of Science</option>
              </select>
            </div>

            {/* 비밀번호 필드들 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input password-input"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            {/* 약관 동의 */}
            <div className="form-checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-checkbox"
                required
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to the <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button type="submit" className="signup-button">
              Create Account
            </button>

            {/* 로그인 링크 */}
            <div className="signup-footer">
              <p>Already have an account? <Link to="/signin" className="link">Sign in here</Link></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;